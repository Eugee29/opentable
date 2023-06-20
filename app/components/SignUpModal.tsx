import Button from "@/app/components/Button";
import Input from "@/app/components/Input";
import TransitionModal from "@/app/components/TransitionModal";
import { ChangeEvent, useState } from "react";

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
      <form className="grid grid-cols-2 gap-4">
        <Input
          type="text"
          placeholder="First Name"
          name="firstName"
          value={inputs.firstName}
          onChange={handleChange}
        />
        <Input
          type="text"
          placeholder="Last Name"
          name="lastName"
          value={inputs.lastName}
          onChange={handleChange}
        />
        <Input
          className="col-span-2"
          type="email"
          placeholder="Email"
          name="email"
          value={inputs.email}
          onChange={handleChange}
        />
        <Input
          type="text"
          placeholder="Phone"
          name="phone"
          value={inputs.phone}
          onChange={handleChange}
        />
        <Input
          type="text"
          placeholder="City"
          name="city"
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
            !inputs.email ||
            !inputs.password ||
            !inputs.city ||
            !inputs.firstName ||
            !inputs.lastName ||
            !inputs.phone
          }
        >
          Sign Up
        </Button>
      </form>
    </TransitionModal>
  );
}
