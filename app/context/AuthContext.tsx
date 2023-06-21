"use client";

import useAuth from "@/hooks/useAuth";
import axios from "axios";
import { getCookie } from "cookies-next";
import {
  Dispatch,
  ReactNode,
  SetStateAction,
  createContext,
  useEffect,
  useState,
} from "react";

interface User {
  id: number;
  firstName: string;
  lastName: string;
  city: string;
  phone: string;
}

interface State {
  loading: boolean;
  error: string | null;
  user: User | null;
}

interface AuthState extends State {
  setAuthState: Dispatch<SetStateAction<State>>;
}

const initialState = { loading: true, user: null, error: null };

export const AuthContext = createContext<AuthState>({
  ...initialState,
  setAuthState: () => {},
});

export default function AuthProvider({ children }: { children: ReactNode }) {
  const [authState, setAuthState] = useState<State>(initialState);

  const fetchUser = async () => {
    setAuthState({
      user: null,
      error: null,
      loading: true,
    });

    try {
      const jwt = getCookie("jwt");

      if (!jwt)
        return setAuthState({
          user: null,
          error: null,
          loading: false,
        });

      const response = await axios.get("http://localhost:3000/api/auth/me", {
        headers: {
          Authorization: `Bearer ${jwt}`,
        },
      });

      axios.defaults.headers.common["Authorization"] = `Bearer ${jwt}`;

      return setAuthState({
        user: response.data,
        error: null,
        loading: false,
      });
    } catch (error: any) {
      return setAuthState({
        user: null,
        error: error.response?.data?.error,
        loading: false,
      });
    }
  };

  useEffect(() => {
    fetchUser();
  }, []);

  return (
    <AuthContext.Provider value={{ ...authState, setAuthState }}>
      {children}
    </AuthContext.Provider>
  );
}
