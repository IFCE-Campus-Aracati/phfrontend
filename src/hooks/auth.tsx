import { ReactNode, createContext, useContext, useEffect, useState } from "react";
import api from "../server/api";

interface IUser {
  name: string;
  email: string;
  role: string;
  profile_photo: string;
  created_At: Date;
  update_At: Date;
  token: string;
}

interface AuthContextData {
  signUp: (name: string, email: string, password: string) => void,
  signIn: (email: string, password: string) => void;
  signOut: () => void,
  user: IUser | null;
}

interface AuthProviderProps {
  children: ReactNode;
}

const AuthContext = createContext({} as AuthContextData);

function AuthProvider({ children }: AuthProviderProps) {
  const [user, setUser] = useState<IUser | null>(null);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    async function loadStorage() {
      const userStorage = await localStorage.getItem("@printHub:user");

      if (userStorage) {
        setUser(JSON.parse(userStorage));
      }
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
    const response = await api.post('/signIn', {
      email: email,
      password: password,
    }).then((response) => {
      const isUser = response.data;

      let data = {
        id: isUser.id,
        name: isUser.name,
        email: isUser.email,
        role: isUser.role,
        profile_photo: isUser.profile_photo,
        created_At: isUser.created_at,
        update_At: isUser.update_at,
        token: isUser.token
      }

      userStorage(data);
      setUser(data);
    }).catch((err) => console.log(err));
  }

  async function signOut() {
    await localStorage.clear();
    setUser(null);
  }

  return (
    <AuthContext.Provider
      value={{
        signUp,
        signIn,
        user,
        signOut,
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