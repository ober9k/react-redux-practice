import Navigation from "@components/Navigation.tsx";
import classes from "@layouts/RootLayout.module.css";
import { Outlet } from "react-router";

export default function RootLayout() {
  return (
    <>
      <header className={classes.header}>
        <h1>
          React + Redux + Vite
        </h1>
        <Navigation />
      </header>
      <main className={classes.content}>
        <Outlet />
      </main>
    </>
  );
}
