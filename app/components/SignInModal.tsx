import TransitionModal from "@/app/components/TransitionModal";

interface Props {
  open: boolean;
  onClose: () => void;
}

export default function SignInModal({ open, onClose }: Props) {
  return (
    <TransitionModal
      aria-labelledby="sign-in-modal"
      aria-describedby="sign-in-modal"
      open={open}
      onClose={onClose}
      title="Sign In"
      subtitle="Log Into Your Account"
    >
      <form className="grid grid-cols-2 gap-4">
        <input
          className="rounded border p-3"
          type="text"
          placeholder="First Name"
        />
        <input
          className="rounded border p-3"
          type="text"
          placeholder="Last Name"
        />
        <input
          className="col-span-2 rounded border p-3"
          type="email"
          placeholder="Email"
        />
        <input className="rounded border p-3" type="text" placeholder="Phone" />
        <input className="rounded border p-3" type="text" placeholder="City" />
        <input
          className="col-span-2 rounded border p-3"
          type="password"
          placeholder="Password"
        />
        <button className="col-span-2 rounded bg-[#da3743] py-3 font-bold text-white transition-all duration-300 hover:bg-[#b8222d]">
          Sign In
        </button>
      </form>
    </TransitionModal>
  );
}
