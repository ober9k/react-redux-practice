import { NavLink, Outlet } from "react-router";

export default function RootLayout() {
  return (
    <>
      <h1>React + Redux</h1>
      <nav>
        <NavLink to="/">Home</NavLink>
        <NavLink to="/counter">Counter</NavLink>
        <NavLink to="/todos">Todos</NavLink>
      </nav>
      <Outlet />
    </>
  );
}