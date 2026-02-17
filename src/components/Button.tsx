import type { ReactNode } from "react";
import cssClasses from "./Button.module.css";

type ButtonProps = {
  children: ReactNode,
  onClick:  () => void,
}

export default function Button({ children, onClick = () => {} }: ButtonProps) {
  return (
    <button className={cssClasses.button} onClick={onClick}>
      {children}
    </button>
  );
}
