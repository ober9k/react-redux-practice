import { NavLink } from "react-router";import classes from "@components/Navigation.module.css";

export default function Navigation() {
  return (
    <nav className={classes.links}>
      <NavLink to="/" className={classes.link}>Home</NavLink>
      <NavLink to="/counter" className={classes.link}>Counter</NavLink>
      <NavLink to="/todos" className={classes.link}>Todos</NavLink>
    </nav>
  );
}
