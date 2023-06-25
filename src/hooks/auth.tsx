import { ReactNode, createContext, useContext, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import { format } from "date-fns";
import api from "../server/api";
import request from "axios";

import {
  PrinterProps,
  PrinterRequestProps,
  ListTableDataProps,
  UserProps,
  UserRequestProps,
  ChangePasswordProps,
  ChangeRoleProps,
} from "../utils/interfaces";

interface EditPrintProps {
  status: string;
  id: string;
  printing_duration: string;
  printer_id: string;
}
interface PrintRequest {
  prints: ListTableDataProps[];
  totalPage: number;
}

interface IUser {
  id: string;
  name: string;
  email: string;
  role: "client" | "admin";
  profile_photo: string;
  token: string;
}

interface AuthContextData {
  signUp: (name: string, email: string, password: string) => void;
  signIn: (email: string, password: string) => void;
  signOut: () => void;
  user: IUser | null;
  loading: boolean;
  signed: boolean;
  createPrinter: ({ title, type, material, description }: PrinterProps) => void;
  deletePrinter: (id: string) => void;
  deletePrint: (id: string) => void;
  getPrinters: (page: number) => Promise<void>;
  getUsersData: (page: number) => Promise<void>;
  updateRole: ({ id, role }: ChangeRoleProps) => void;
  changePassword: ({ oldPassword, password }: ChangePasswordProps) => void;
  printers: PrinterProps[];
  editPrinter: ({ title, type, material, description, id, status }: PrinterProps) => void;
  usersData: UserProps[];
  getMyPrints: (page: number) => Promise<void>;
  getPrints: (page: number) => Promise<void>;
  myPrintData: ListTableDataProps[];
  printsData: ListTableDataProps[];
  totalPages: number;
  editPrints: ({ id, printer_id, printing_duration, status }: EditPrintProps) => Promise<void>;
  getPrintDetail: (id: string) => void;
  print: ListTableDataProps;
  loadingRequest: boolean;
  getUserProfileData: () => void;
  userProfileData: UserProps;
}
interface AuthProviderProps {
  children: ReactNode;
}

export const AuthContext = createContext({} as AuthContextData);

function AuthProvider({ children }: AuthProviderProps) {
  const [user, setUser] = useState<IUser>({} as IUser);
  const [loading, setLoading] = useState(true);
  // const [userRole, setUserRole] = useState<string | null>(null);
  const [printers, setPrinters] = useState<PrinterProps[]>([]);
  const [usersData, setUsersData] = useState<UserProps[]>([]);
  const [printsData, setPrintsData] = useState<ListTableDataProps[]>([]);
  const [myPrintData, setMyPrintData] = useState<ListTableDataProps[]>([]);
  const [totalPages, setTotalPages] = useState<number>(1);
  const [print, setPrint] = useState<ListTableDataProps>({} as ListTableDataProps);
  const [loadingRequest, setLoadingRequest] = useState<boolean>(false);
  const [userProfileData, setUserProfileDate] = useState<UserProps>({} as UserProps);

  const navigate = useNavigate();

  useEffect(() => {
    async function loadStorage() {
      const userStorage = await localStorage.getItem("@printHub:user");

      if (userStorage) {
        const userData = JSON.parse(userStorage) as IUser;
        setUser(userData);
        // setUserRole(userData.role);

        if (userData.role === "admin") {
          navigate("/admin/list_prints");
        } else if (userData.role === "client") {
          navigate("/client/my_prints");
        }
      }

      setLoading(false);
    }

    loadStorage();
  }, []);

  async function userStorage(data: IUser) {
    await localStorage.setItem("@printHub:user", JSON.stringify(data));
  }

  async function signUp(name: string, email: string, password: string) {
    setLoadingRequest(true);

    await api
      .post("/signUp", {
        email: email,
        name: name,
        password: password,
      })
      .then((response) => {
        const user = response.data;

        let data = {
          id: user.id,
          name: user.name,
          email: user.email,
          role: user.role,
          token: user.token,
          profile_photo: user.profile_photo,
        };

        setUser(data);
        userStorage(data);

        if (data.role === "admin") {
          navigate("/admin/list_prints");
          toast.success(`Seja bem-vindo, ${user.name}`);
        } else if (data.role === "client") {
          navigate("/client/my_prints");
          toast.success(`Seja bem-vindo, ${user.name}`);
        }
      })
      .catch((err) => {
        console.log(err);
        toast.error("Erro ao cadastrar");
      })
      .finally(() => {
        setLoadingRequest(false);
      });
  }

  async function signIn(email: string, password: string) {
    setLoadingRequest(true);

    await api
      .post("/signIn", {
        email: email,
        password: password,
      })
      .then((response) => {
        const user = response.data;

        let data = {
          id: user.id,
          name: user.name,
          email: user.email,
          role: user.role,
          token: user.token,
          profile_photo: user.profile_photo,
        };

        setUser(data);
        userStorage(data);

        if (data.role === "admin") {
          navigate("/admin/list_prints");
          return toast.success(`Seja bem-vindo, ${user.name}`);
        } else if (data.role === "client") {
          navigate("/client/my_prints");
          return toast.success(`Seja bem-vindo, ${user.name}`);
        }
      })
      .catch((err) => {
        console.log(err);
        toast.error("Usuário ou senha inválida");
      })
      .finally(() => {
        setLoadingRequest(false);
      });
  }

  async function signOut() {
    await localStorage.clear();
    setUser({} as IUser);
    navigate("/");
  }

  async function getUsersData(page: number) {
    setLoadingRequest(true);

    await api
      .get<UserRequestProps>(`/users/${page}`, {
        headers: { Authorization: `$Bearer ${user?.token}` },
      })
      .then((response) => {
        setUsersData(response.data.users);
        setTotalPages(response.data.totalPage);
      })
      .catch((err) => {
        console.log(err);
        toast.error("Não foi possível carregar os registro de usuários");
      })
      .finally(() => {
        setLoadingRequest(false);
      });
  }

  async function updateRole({ id, role }: ChangeRoleProps) {
    try {
      const response = await api.put(
        "/changeRole",
        { id, role },
        {
          headers: { Authorization: `Bearer ${user.token}` },
        }
      );

      if (response) {
        toast.success("Cargo do usuário alterado com sucesso!");
        navigate("/admin/list_users");
      }
    } catch (err) {
      console.log(err);
    }
  }

  async function getMyPrints(page: number) {
    setLoadingRequest(true);

    await api
      .get<PrintRequest>(`/getUserPrint/${page}`, {
        headers: { Authorization: `$Bearer ${user?.token}` },
      })
      .then((response) => {
        const prints = response.data.prints;

        const formattedPrints = prints.map((print) => ({
          ...print,
          created_at: format(new Date(print.created_at), "dd/MM/yyyy"),
        }));

        setMyPrintData(formattedPrints);
        setTotalPages(response.data.totalPage);
      })
      .catch((err) => {
        console.log(err);
        toast.error("Não foi possível carregar os seus registros de impressões");
      })
      .finally(() => {
        setLoadingRequest(false);
      });
  }

  async function getPrinters(page: number) {
    setLoadingRequest(true);

    await api
      .get<PrinterRequestProps>(`/printers/${page}`, {
        headers: { Authorization: `$Bearer ${user?.token}` },
      })
      .then((response) => {
        setPrinters(response.data.printers);
        setTotalPages(response.data.totalPage);
      })
      .catch((err) => {
        console.log(err);
        toast.error("Não foi possível carregar as impressoras");
      })
      .finally(() => {
        setLoadingRequest(false);
      });
  }

  async function createPrinter({ type, title, description, material }: PrinterProps) {
    try {
      const response = await api.post(
        "/createPrinter",
        { title, description, type, material },
        {
          headers: { Authorization: `Bearer ${user.token}` },
        }
      );

      if (response) {
        const printer = response.data;
        setPrinters((oldValue) => [...oldValue, printer]);
        toast.success("Impressora foi Criada com sucesso!");
      }
    } catch (error) {
      console.log(error);
      toast.success("Não possível criar uma nova impressora!");
    }
  }

  async function editPrinter({ description, material, title, type, status, id }: PrinterProps) {
    try {
      const response = await api.put(
        "/updatePrinter",
        { description, material, title, type, status, id },
        {
          headers: { Authorization: `Bearer ${user.token}` },
        }
      );

      if (response) {
        toast.success("Impressora foi editada com sucesso!");
      }
    } catch (error) {}
  }

  async function deletePrinter(id: string) {
    try {
      const response = await api.delete(`/deletePrinter/${id}`, {
        headers: { Authorization: `$Bearer ${user?.token}` },
      });
      if (response) {
        const filteredPrinters = printers.filter((printer) => id !== printer.id);
        setPrinters(filteredPrinters);
        toast.success("Impressora foi deletada com sucesso!");
      }
    } catch (err) {
      console.log(err);
    }
  }

  async function deletePrint(id: string) {
    try {
      const response = await api.delete(`/deletePrint/${id}`, {
        headers: { Authorization: `$Bearer ${user?.token}` },
      });
      if (response) {
        const filteredPrints = myPrintData.filter((printer) => id !== printer.id);
        setMyPrintData(filteredPrints);
        toast.success("A Impressão foi deletada com sucesso!");
      }
    } catch (err) {
      console.log(err);
    }
  }

  async function changePassword({ oldPassword, password }: ChangePasswordProps) {
    try {
      const response = await api.put(
        "/resetPassword",
        { oldPassword, password },
        {
          headers: { Authorization: `$Bearer ${user?.token}` },
        }
      );

      if (response) {
        toast.success("Senha atualizada com sucesso!");
      }
    } catch (err) {
      if (request.isAxiosError(err)) {
        console.log(err.response?.data);
        toast.error(err.response?.data.message);
      }
    }
  }

  async function getPrints(page: number) {
    setLoadingRequest(true);

    await api
      .get<PrintRequest>(`/getAllPrints/${page}`, {
        headers: { Authorization: `$Bearer ${user?.token}` },
      })
      .then((response) => {
        const prints = response.data.prints;

        const formattedPrints = prints.map((print) => ({
          ...print,
          created_at: format(new Date(print.created_at), "dd/MM/yyyy"),
        }));

        setPrintsData(formattedPrints);
        setTotalPages(response.data.totalPage);
      })
      .catch((err) => {
        console.log(err);
        toast.error("Não foi possível carregar os registro de impressão");
      })
      .finally(() => {
        setLoadingRequest(false);
      });
  }

  async function editPrints({ id, printer_id, printing_duration, status }: EditPrintProps) {
    try {
      const response = await api.put(
        "/updatePrint",
        { status, id, printer_id, printing_duration },
        {
          headers: { Authorization: `$Bearer ${user?.token}` },
        }
      );

      if (response.data) {
        toast.success("Impresão atulizada com sucesso");
      }
    } catch (error) {
      console.log(error);
    }
  }

  async function getPrintDetail(id: string) {
    try {
      const response = await api.get(`/searchByIdPrint/${id}`, {
        headers: { Authorization: `Bearer ${user?.token}` },
      });

      if (response) {
        const print = response.data;
        console.log(print);

        setPrint(print);
      }
    } catch (error) {
      console.log(error);
    }
  }

  async function getUserProfileData() {
    setLoadingRequest(true);

    await api
      .get(`/detailsUser`, {
        headers: { Authorization: `$Bearer ${user?.token}` },
      })
      .then((response) => {
        setUserProfileDate(response.data);
      })
      .catch((err) => {
        console.log(err);
        toast.error("Não foi possível carregar os dados do perfil");
      })
      .finally(() => {
        setLoadingRequest(false);
      });
  }

  return (
    <AuthContext.Provider
      value={{
        signed: !!user?.token,
        signUp,
        signIn,
        user,
        signOut,
        loading,
        createPrinter,
        deletePrinter,
        deletePrint,
        getPrinters,
        getUsersData,
        printers,
        usersData,
        changePassword,
        editPrinter,
        updateRole,
        getMyPrints,
        getPrints,
        myPrintData,
        printsData,
        totalPages,
        editPrints,
        getPrintDetail,
        print,
        loadingRequest,
        getUserProfileData,
        userProfileData,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
}

function useAuth(): AuthContextData {
  const context = useContext(AuthContext);

  return context;
}

export { useAuth, AuthProvider };
