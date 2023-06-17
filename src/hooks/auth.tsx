import { ReactNode, createContext, useContext, useEffect, useState } from "react";
import api from "../server/api";
import { useNavigate } from "react-router";

interface IUser {
  id: string;
  name: string;
  email: string;
  role: 'client' | 'admin';
  profile_photo: string;
  token: string;
}


interface AuthContextData {
  signUp: (name: string, email: string, password: string) => void,
  signIn: (email: string, password: string) => Promise<IUser | void>;
  signOut: () => void;
  checkRole: (role: 'client' | 'admin') => boolean;
  userRole: string | null;
  user: IUser | null;
  loading: boolean
  isAuthenticated: boolean;
}
interface AuthProviderProps {
  children: ReactNode;
}

export const AuthContext = createContext({} as AuthContextData);

function AuthProvider({ children }: AuthProviderProps) {
  const [user, setUser] = useState<IUser | null>(null);
  const [loading, setLoading] = useState(true);
  const [roleUser, isRoleUser] = useState("");
  const [userRole, setUserRole] = useState<string | null>(null);
  const isAuthenticated = !!user;

  const navigate = useNavigate();

  useEffect(() => {
    async function loadStorage() {
      const userStorage = await localStorage.getItem("@printHub:user");

      if (userStorage) {
        const userData = JSON.parse(userStorage) as IUser;
        setUser(userData)
        setUserRole(userData.role);

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
      const response = await api.post('/signUp', {
        name: name,
        email: email,
        password: password
      });

      return response.data;
    } catch (error) {
      console.log(error);
    }
  }

  async function signIn(email: string, password: string) {
    try {
      const response = await api.post('/signIn', {
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
        }

        api.defaults.headers.common["Authorization"] = `Bearer ${userData.token}`;

        setUser(data);
        userStorage(data);
        setUserRole(data.role);

        return data;
      }
    } catch (err) {
      console.log(err);
      throw new Error("Não foi possível realizar o login.");
    }
  }

  async function signOut() {
    await localStorage.clear();
    setUser({} as IUser);
  }

  function checkRole(role: 'client' | 'admin'): boolean {
    console.log(user?.role)
    return user?.role === role;

  }

  console.log(user)
  console.log(userRole);

  return (
    <AuthContext.Provider
      value={{
        signUp,
        signIn,
        user,
        userRole,
        checkRole,
        signOut,
        loading,
        isAuthenticated
      }}
    >
      {children}
    </AuthContext.Provider>
  )
}

function useAuth(): AuthContextData {
  const context = useContext(AuthContext);

  return context;
}

export { useAuth, AuthProvider };