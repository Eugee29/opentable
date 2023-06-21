import { AuthContext } from "@/app/context/AuthContext";
import axios from "axios";
import { deleteCookie } from "cookies-next";
import { useContext } from "react";

const useAuth = () => {
  const { user: data, error, loading, setAuthState } = useContext(AuthContext);

  const signIn = async (
    credentials: {
      email: string;
      password: string;
    },
    onSuccess: () => void
  ) => {
    setAuthState({
      user: null,
      error: null,
      loading: true,
    });

    try {
      const response = await axios.post(
        "http://localhost:3000/api/auth/signin",
        credentials
      );

      setAuthState({
        user: response.data,
        error: null,
        loading: false,
      });

      onSuccess();
    } catch (error: any) {
      setAuthState({
        user: null,
        error: error.response.data.error,
        loading: false,
      });
    }
  };

  const signUp = async (
    credentials: {
      email: string;
      password: string;
      firstName: string;
      lastName: string;
      city: string;
      phone: string;
    },
    onSuccess: () => void
  ) => {
    setAuthState({
      user: null,
      error: null,
      loading: true,
    });

    try {
      const response = await axios.post(
        "http://localhost:3000/api/auth/signup",
        credentials
      );

      setAuthState({
        user: response.data,
        error: null,
        loading: false,
      });

      onSuccess();
    } catch (error: any) {
      setAuthState({
        user: null,
        error: error.response.data.error,
        loading: false,
      });
    }
  };

  const signOut = () => {
    deleteCookie("jwt");
    setAuthState({
      user: null,
      error: null,
      loading: false,
    });
  };

  return { signIn, signUp, signOut };
};

export default useAuth;
