import { ReactNode, createContext, useContext, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import api from "../server/api";
import request from 'axios';
import { PrintersTableDataProps } from "../components/Table/PrintersTable";

export interface Prints {
  id: string;
  title: string;
  owner: string;
  date: string;
  status: "pending" | "approved" | "decline";
}
export interface Printers {
  id?: string;
  title: string;
  description: string;
  type: string;
  material: string;
  status?: "pending" | "approved" | "decline" | "available" | "unavailable" | undefined;
}

export interface ChangePasswordProps {
  oldPassword: string;
  password: string;
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
  getPrinters: () => void;
  changePassword: ({ oldPassword, password }: ChangePasswordProps) => void,
  printers: Printers[];
  editPrinter: ({ title, type, material, description, id, status }: Printers) => void;
}
interface AuthProviderProps {
  children: ReactNode;
}

export const AuthContext = createContext({} as AuthContextData);

function AuthProvider({ children }: AuthProviderProps) {
  const [user, setUser] = useState<IUser>({} as IUser);
  const [loading, setLoading] = useState(true);
  const [userRole, setUserRole] = useState<string | null>(null);
  const [printers, setPrinters] = useState<Printers[]>([])
  const [printsData, setPrintsData] = useState();

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

  async function getPrinters() {
    try {
      const response = await api.get<PrintersTableDataProps[]>("/printers", {
        headers: { Authorization: `$Bearer ${user?.token}` }
      });

      setPrinters(response.data);
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
      if (response.status === 400) {
        console.log('oi');
      }
    } catch (err) {
      if (request.isAxiosError(err)) {
        console.log(err.response?.data);
        toast.error(err.response?.data.message);
      }
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
        printers,
        changePassword,
        editPrinter
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
