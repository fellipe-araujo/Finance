import React, { createContext, useState, useEffect, useContext } from "react";
import { useHistory } from "react-router-dom";
import api from "../services/api";
import userService from "../services/userService";
import { User } from "../utils/types";

interface AuthContextData {
  signed: boolean;
  user: User | null;
  loading: boolean;
  signIn(email: string, password: string): Promise<void>;
  signOut(): void;
}

const AuthContext = createContext<AuthContextData>({} as AuthContextData);

export const AuthProvider: React.FC = ({ children }) => {
  const [user, setUser] = useState<User | null>(null);
  const [loading, setLoading] = useState(true);

  const history = useHistory();

  useEffect(() => {
    function loadStoragedData() {
      const storagedUser = localStorage.getItem("@RNAuth:user");
      const storagedToken = localStorage.getItem("@RNAuth:token");

      if (storagedUser && storagedToken) {
        api.defaults.headers.Authorization = `Bearer ${storagedToken}`;
        setUser(JSON.parse(storagedUser));
      } else {
        setUser(null);
        history.push("/login");
      }
      setLoading(false);
    }

    loadStoragedData();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  async function signIn(email: string, password: string) {
    setLoading(true);

    try {
      const response = await userService.login(email, password);

      setUser(response.user);

      api.defaults.headers.Authorization = `Bearer ${response.token}`;

      localStorage.setItem("@RNAuth:user", JSON.stringify(response.user));
      localStorage.setItem("@RNAuth:token", response.token);

      history.push("/");

      setLoading(false);
    } catch (error) {
      alert("Email ou senha incorretos");
      console.log(error);
    }
  }

  function signOut() {
    localStorage.clear();
    setUser(null);
    history.push("/login");
  }

  return (
    <AuthContext.Provider
      value={{ signed: !!user, user, loading, signIn, signOut }}
    >
      {children}
    </AuthContext.Provider>
  );
};

export function useAuth() {
  const context = useContext(AuthContext);

  return context;
}
