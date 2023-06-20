import { AuthContext } from "@/app/context/AuthContext";
import axios from "axios";
import { useContext } from "react";

const useAuth = () => {
  const { data, error, loading, setAuthState } = useContext(AuthContext);

  const signIn = async ({
    email,
    password,
  }: {
    email: string;
    password: string;
  }) => {
    setAuthState({
      data: null,
      error: null,
      loading: true,
    });

    try {
      const response = await axios.post(
        "http://localhost:3000/api/auth/signin",
        {
          email,
          password,
        }
      );

      setAuthState({
        data: response.data,
        error: null,
        loading: false,
      });
    } catch (error: any) {
      setAuthState({
        data: null,
        error: error.response.data,
        loading: false,
      });
    }
  };

  const signUp = async () => {};

  return { signIn, signUp };
};

export default useAuth;
