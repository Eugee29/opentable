import Button from "@/app/components/Button";
import Input from "@/app/components/Input";
import TransitionModal from "@/app/components/TransitionModal";
import { AuthContext } from "@/app/context/AuthContext";
import useAuth from "@/hooks/useAuth";
import { Alert } from "@mui/material";
import { ChangeEvent, FormEvent, useContext, useState } from "react";
import { PulseLoader } from "react-spinners";

interface Props {
  open: boolean;
  onClose: () => void;
}

export default function SignInModal({ open, onClose }: Props) {
  const [inputs, setInputs] = useState({
    email: "",
    password: "",
  });

  const { signIn } = useAuth();
  const { loading, error, user } = useContext(AuthContext);

  const handleSubmit = (ev: FormEvent<HTMLFormElement>) => {
    ev.preventDefault();
    signIn(inputs, onClose);
  };

  const handleChange = (ev: ChangeEvent<HTMLInputElement>) => {
    setInputs({ ...inputs, [ev.target.name]: ev.target.value });
  };

  return (
    <TransitionModal
      open={open}
      onClose={onClose}
      title="Sign In"
      subtitle="Log Into Your Account"
    >
      <form className="mb-4 grid grid-cols-2 gap-4" onSubmit={handleSubmit}>
        <Input
          className="col-span-2"
          type="email"
          autoComplete="email"
          placeholder="Email"
          name="email"
          value={inputs.email}
          onChange={handleChange}
          required
        />

        <Input
          className="col-span-2"
          type="password"
          placeholder="Password"
          name="password"
          value={inputs.password}
          onChange={handleChange}
          required
        />
        <Button disabled={!inputs.email || !inputs.password || loading}>
          {loading ? <PulseLoader color="white" size={8} /> : "Sign In"}
        </Button>
      </form>
      {error && <Alert severity="error">{error}</Alert>}
    </TransitionModal>
  );
}
