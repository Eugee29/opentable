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

export default function SignUpModal({ open, onClose }: Props) {
  const [inputs, setInputs] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    city: "",
    password: "",
  });

  const { signUp } = useAuth();
  const { loading, error } = useContext(AuthContext);

  const handleSubmit = (ev: FormEvent<HTMLFormElement>) => {
    ev.preventDefault();
    signUp(inputs, onClose);
  };

  const handleChange = (ev: ChangeEvent<HTMLInputElement>) => {
    setInputs({ ...inputs, [ev.target.name]: ev.target.value });
  };

  return (
    <TransitionModal
      open={open}
      onClose={onClose}
      title="Sign Up"
      subtitle="Create Your OpenTable Account"
    >
      <form
        className="mb-4 grid grid-cols-2 gap-4"
        onSubmit={handleSubmit}
        name="signUp"
      >
        <Input
          type="text"
          placeholder="First Name"
          name="firstName"
          autoComplete="given-name"
          value={inputs.firstName}
          onChange={handleChange}
        />
        <Input
          type="text"
          placeholder="Last Name"
          name="lastName"
          autoComplete="family-name"
          value={inputs.lastName}
          onChange={handleChange}
        />
        <Input
          className="col-span-2"
          type="email"
          placeholder="Email"
          name="email"
          autoComplete="email"
          value={inputs.email}
          onChange={handleChange}
        />
        <Input
          type="text"
          placeholder="Phone"
          name="phone"
          autoComplete="phone"
          value={inputs.phone}
          onChange={handleChange}
        />
        <Input
          type="text"
          placeholder="City"
          name="city"
          autoComplete="street-address"
          value={inputs.city}
          onChange={handleChange}
        />
        <Input
          className="col-span-2"
          type="password"
          placeholder="Password"
          name="password"
          value={inputs.password}
          onChange={handleChange}
        />
        <Button
          disabled={
            loading ||
            !inputs.email ||
            !inputs.password ||
            !inputs.city ||
            !inputs.firstName ||
            !inputs.lastName ||
            !inputs.phone
          }
        >
          {loading ? <PulseLoader color="white" size={8} /> : "Sign Up"}
        </Button>
      </form>
      {error && <Alert severity="error">{error}</Alert>}
    </TransitionModal>
  );
}
