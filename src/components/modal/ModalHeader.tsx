import type { ReactNode } from "react";
import classes from "./ModalHeader.module.css";

type ModalHeaderProps = {
  children: ReactNode,
}

export default function ModalHeader({ children }: ModalHeaderProps) {
  return (
    <header className={classes.header}>
      {children}
    </header>
  );
}