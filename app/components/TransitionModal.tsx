import Backdrop from "@mui/material/Backdrop";
import Modal from "@mui/material/Modal";
import Fade from "@mui/material/Fade";
import { ReactNode } from "react";

interface Props {
  open: boolean;
  onClose: () => void;
  title?: string;
  subtitle?: string;
  children?: ReactNode;
}

export default function TransitionModal({
  open,
  onClose,
  title,
  subtitle,
  children,
}: Props) {
  return (
    <Modal
      open={open}
      onClose={onClose}
      closeAfterTransition
      slots={{ backdrop: Backdrop }}
      slotProps={{
        backdrop: {
          timeout: 500,
        },
      }}
    >
      <Fade in={open}>
        <div className="absolute left-1/2 top-1/2 h-2/3 w-96 -translate-x-1/2 -translate-y-1/2 rounded bg-white p-4 shadow-lg">
          {title && (
            <h1 className="mb-4 border-b pb-4 text-center text-sm font-bold uppercase">
              {title}
            </h1>
          )}
          <div className="m-auto">
            {subtitle && (
              <h2 className="mb-4 text-center font-light uppercase">
                {subtitle}
              </h2>
            )}
            {children}
          </div>
        </div>
      </Fade>
    </Modal>
  );
}
