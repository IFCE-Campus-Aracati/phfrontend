import { ReactNode, createContext, useContext, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import api from "../server/api";

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
}
interface AuthProviderProps {
  children: ReactNode;
}

export const AuthContext = createContext({} as AuthContextData);

function AuthProvider({ children }: AuthProviderProps) {
  const [user, setUser] = useState<IUser>({} as IUser);
  const [loading, setLoading] = useState(true);
  const [userRole, setUserRole] = useState<string | null>(null);

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
          toast.success(`Sejá bem-vindo, ${userData.name}`);
        } else if (userData.role === "client") {
          navigate("/client/my_prints");
          toast.success(`Sejá bem-vindo, ${userData.name}`);
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
          toast.success(`Sejá bem-vindo, ${userData.name}`);
        } else if (data.role === "client") {
          navigate("/client/my_prints");
          toast.success(`Sejá bem-vindo, ${userData.name}`);
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

  return (
    <AuthContext.Provider
      value={{
        signed: !!user?.token,
        signUp,
        signIn,
        user,
        signOut,
        loading,
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
