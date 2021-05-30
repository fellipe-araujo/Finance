import React, { createContext, useState, useEffect, useContext } from "react";
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

  useEffect(() => {
    function loadStoragedData() {
      const storagedUser = localStorage.getItem("@RNAuth:user");
      const storagedToken = localStorage.getItem("@RNAuth:token");

      if (storagedUser && storagedToken) {
        api.defaults.headers.Authorization = `Bearer ${storagedToken}`;
        setUser(JSON.parse(storagedUser));
      }
      setLoading(false);
    }

    loadStoragedData();
  }, []);

  async function signIn(email: string, password: string) {
    setLoading(true);
    const response = await userService.login(email, password);

    setUser(response.user);

    api.defaults.headers.Authorization = `Bearer ${response.token}`;

    localStorage.setItem("@RNAuth:user", JSON.stringify(response.user));
    localStorage.setItem("@RNAuth:token", response.token);
    setLoading(false);
  }

  function signOut() {
    localStorage.clear();
    setUser(null);
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
