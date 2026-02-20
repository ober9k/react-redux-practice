import type { ReactNode } from "react";
import classes from "./Modal.module.css";

type ModalProps = {
  onClose: () => void,
  children: ReactNode;
}

export default function Modal({ onClose, children }: ModalProps) {
  return (
    <>
      <div className={classes.backdrop}></div>
      <dialog open={true} className={classes.modal}>
        <div className={classes.closeAction}>
          <button onClick={onClose}>&times;</button>
        </div>
        {children}
      </dialog>
    </>
  );
}
