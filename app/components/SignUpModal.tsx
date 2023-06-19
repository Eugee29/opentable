import TransitionModal from "@/app/components/TransitionModal";

interface Props {
  open: boolean;
  onClose: () => void;
}

export default function SignUpModal({ open, onClose }: Props) {
  return (
    <TransitionModal
      aria-labelledby="sign-up-modal"
      aria-describedby="sign-up-modal"
      open={open}
      onClose={onClose}
      title="Create an Account"
      subtitle="Create Your OpenTable Account"
    ></TransitionModal>
  );
}
