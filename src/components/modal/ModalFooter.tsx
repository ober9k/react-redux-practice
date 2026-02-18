import type { ReactNode } from "react";
import classes from "./ModalFooter.module.css";

type ModalFooterProps = {
  children: ReactNode,
}

export default function ModalFooter({ children }: ModalFooterProps) {
  return (
    <footer className={classes.footer}>
      {children}
    </footer>
  );
}