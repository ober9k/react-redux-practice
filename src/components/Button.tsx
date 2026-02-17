import type { ReactNode } from "react";
import cssClasses from "./Button.module.css";

type ButtonProps = {
  children: ReactNode,
  disabled?: boolean,
  onClick?: () => void,
}

export default function Button({ children, disabled = false, onClick = () => {} }: ButtonProps) {
  return (
    <button className={cssClasses.button} disabled={disabled!} onClick={onClick!}>
      {children}
    </button>
  );
}
