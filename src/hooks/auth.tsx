import { ReactNode, createContext, useContext, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import api from "../server/api";
import request from 'axios';
import { PrintersProps, PrintersRequestProps } from "../components/Table/PrintersTable";
import { UserProps, UserRequestProps } from "../components/Table/UserTable";
import { id, tr } from "date-fns/locale";
import { ListTableDataProps } from "../components/Table/ListTable";
import { format } from "date-fns";
import { date } from "yup";

interface EditPrintProps {
  status: string;
  id: string;
  printing_duration: string;
  date: string;
  printer_id: string;
}
interface PrintRequest {
  prints: Prints[];
  totalPage: number;
}
export interface Prints {
  id?: string;
  title: string;
  identifier?: string;
  owner?: {
    name?: string;
  };
  owner_id?: string;
  created_at: string;
  status: "pending" | "approved" | "decline";
  description?: string;
  material?: string;
  archive?: string;
  printer_id?: string;
  printing_date?: string;
  printing_duration?: string;
}
export interface Printers {
  id?: string;
  title: string;
  description: string;
  type: string;
  material: string;
  status?: "pending" | "approved" | "decline" | "available" | "unavailable" | undefined;
}

export interface UsersData {
  id: string;
  name: string;
  email: string;
  role: string;
}

export interface ChangePasswordProps {
  oldPassword: string;
  password: string;
}

export interface ChangeRoleProps {
  id: string;
  role: string;
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
  createPrinter: ({ title, type, material, description }: Printers) => void;
  deletePrinter: (id: string) => void;
  getPrinters: (page: number) => Promise<void>;
  getUsersData: (page: number) => Promise<void>;
  updateRole: ({ id, role }: ChangeRoleProps) => void;
  changePassword: ({ oldPassword, password }: ChangePasswordProps) => void;
  printers: Printers[];
  editPrinter: ({ title, type, material, description, id, status }: Printers) => void;
  usersData: UsersData[];
  getPrints: (page: number) => Promise<void>;
  printsData: ListTableDataProps[];
  totalPages: number;
  editPrints: ({ date, id, printer_id, printing_duration, status }: EditPrintProps) => Promise<void>;
  getPrintDetail: (id: string) => void;
  print: Prints;
}
interface AuthProviderProps {
  children: ReactNode;
}

export const AuthContext = createContext({} as AuthContextData);

function AuthProvider({ children }: AuthProviderProps) {
  const [user, setUser] = useState<IUser>({} as IUser);
  const [loading, setLoading] = useState(true);
  const [userRole, setUserRole] = useState<string | null>(null);
  const [printers, setPrinters] = useState<PrintersProps[]>([])
  const [usersData, setUsersData] = useState<UserProps[]>([])
  const [printsData, setPrintsData] = useState<Prints[]>([]);
  const [totalPages, setTotalPages] = useState<number>(1);
  const [print, setPrint] = useState<Prints>({} as Prints);

  const navigate = useNavigate();

  useEffect(() => {
    async function loadStorage() {
      const userStorage = await localStorage.getItem("@printHub:user");

      if (userStorage) {
        const userData = JSON.parse(userStorage) as IUser;
        setUser(userData);
        setUserRole(userData.role);

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
    try {
      const response = await api.post("/signUp", {
        name: name,
        email: email,
        password: password,
      });

      if (response.status === 200) {
        const userData = response.data as IUser;

        let data = {
          id: userData.id,
          name: userData.name,
          email: userData.email,
          role: userData.role,
          token: userData.token,
          profile_photo: userData.profile_photo,
        };

        api.defaults.headers.common["Authorization"] = `Bearer ${userData.token}`;

        setUser(data);
        userStorage(data);
        setUserRole(data.role);

        if (data.role === "admin") {
          navigate("/admin/list_prints");
          toast.success(`Seja bem-vindo, ${userData.name}`);
        } else if (data.role === "client") {
          navigate("/client/my_prints");
          toast.success(`Seja bem-vindo, ${userData.name}`);
        }
      }
    } catch (error) {
      return toast.error("Usuário ou senha inválida");
    }
  }

  async function signIn(email: string, password: string) {
    try {
      const response = await api.post("/signIn", {
        email: email,
        password: password,
      });

      if (response.status === 200) {
        const userData = response.data as IUser;

        let data = {
          id: userData.id,
          name: userData.name,
          email: userData.email,
          role: userData.role,
          token: userData.token,
          profile_photo: userData.profile_photo,
        };

        api.defaults.headers.common["Authorization"] = `Bearer ${userData.token}`;

        setUser(data);
        userStorage(data);
        setUserRole(data.role);

        if (data.role === "admin") {
          navigate("/admin/list_prints");
          return toast.success(`Sejá bem-vindo, ${userData.name}`);
        } else if (data.role === "client") {
          navigate("/client/my_prints");
          return toast.success(`Sejá bem-vindo, ${userData.name}`);
        }
      }
    } catch (err) {
      return toast.error("Usuário ou senha inválida");
    }
  }

  async function signOut() {
    await localStorage.clear();
    setUser({} as IUser);
    navigate("/");
  }

  async function getUsersData(page: number) {
    try {
      const response = await api.get<UserRequestProps>(`/users/${page}`, {
        headers: { Authorization: `$Bearer ${user?.token}` }
      });

      setUsersData(response.data.users);
      setTotalPages(response.data.totalPage);
    } catch (err) {
      console.log(err);
    }
  }

  async function updateRole({ id, role }: ChangeRoleProps) {
    try {
      const response = await api.put('/changeRole', { id, role }, {
        headers: { Authorization: `Bearer ${user.token}` }
      });

      if (response) {
        toast.success('Cargo do usuário alterado com sucesso!')
        navigate('/admin/list_users');
      }
    } catch (err) {
      console.log(err)
    }
  }

  async function getPrinters(page: number) {
    try {
      const response = await api.get<PrintersRequestProps>(`/printers/${page}`, {
        headers: { Authorization: `$Bearer ${user?.token}` }
      });

      setPrinters(response.data.printers);
      setTotalPages(response.data.totalPage);
    } catch (err) {
      console.log(err);
    }
  }

  async function createPrinter({ type, title, description, material }: Printers) {
    try {
      const response = await api.post('/createPrinter', { title, description, type, material }, {
        headers: { Authorization: `Bearer ${user.token}` }
      })

      if (response) {
        const printer = response.data;
        setPrinters((oldValue) => [...oldValue, printer]);
        toast.success('Impressora foi Criada com sucesso!')
      }
    } catch (error) {
      console.log(error)
      toast.success('Não possível criar uma nova impressora!')
    }
  }

  async function editPrinter({ description, material, title, type, status, id }: Printers) {
    try {
      const response = await api.put('/updatePrinter', { description, material, title, type, status, id }, {
        headers: { Authorization: `Bearer ${user.token}` }
      })

      if (response) {
        toast.success('Impressora foi editada com sucesso!')
      }
    } catch (error) {

    }
  }

  async function deletePrinter(id: string) {
    try {
      const response = await api.delete(`/deletePrinter/${id}`, {
        headers: { Authorization: `$Bearer ${user?.token}` },
      });
      if (response) {
        const filteredPrinters = printers.filter(printer => id !== printer.id);
        setPrinters(filteredPrinters);
        toast.success('Impressora foi deletada com sucesso!')
      }
    } catch (err) {
      console.log(err);
    }
  }

  async function changePassword({ oldPassword, password }: ChangePasswordProps) {
    try {
      const response = await api.put("/resetPassword", { oldPassword, password }, {
        headers: { Authorization: `$Bearer ${user?.token}` },
      });

      if (response) {
        toast.success('Senha atualizada com sucesso!');
      }
    } catch (err) {
      if (request.isAxiosError(err)) {
        console.log(err.response?.data);
        toast.error(err.response?.data.message);
      }
    }
  }

  async function getPrints(page: number) {
    try {
      const response = await api.get<PrintRequest>(`/getAllPrints/${page}`, {
        headers: { Authorization: `$Bearer ${user?.token}` }
      });
      if (response.data) {
        const prints = response.data.prints;
        console.log()

        const formattedPrints = prints.map((print) => ({
          ...print,
          created_at: format(new Date(print.created_at), 'dd/MM/yyyy')
        }));

        setPrintsData(formattedPrints);
        setTotalPages(response.data.totalPage);
      }
    } catch (error) {
      console.log(error)
      toast.error('Não foi possível carregar suas impressões')
    }
  }

  async function editPrints({ date, id, printer_id, printing_duration, status }: EditPrintProps) {
    try {
      const response = await api.put('/updatePrint', { status, id, printer_id, date, printing_duration }, {
        headers: { Authorization: `$Bearer ${user?.token}` }
      })

      if (response.data) {
        toast.success('Deu certo')
      }

    } catch (error) {
      console.log(error);

    }
  }

  async function getPrintDetail(id: string) {
    try {
      const response = await api.get(`/searchByIdPrint/${id}`, {
        headers: { Authorization: `Bearer ${user?.token}` }
      })

      if (response) {
        const print = response.data;

        setPrint(print)
      }
    } catch (error) {
      console.log(error)
    }
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
        getPrinters,
        getUsersData,
        printers,
        usersData,
        changePassword,
        editPrinter,
        updateRole,
        getPrints,
        printsData,
        totalPages,
        editPrints,
        getPrintDetail,
        print
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
