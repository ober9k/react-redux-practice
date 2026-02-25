import Navigation from "@components/Navigation.tsx";
import { Outlet } from "react-router";

export default function RootLayout() {
  return (
    <>
      <h1>React + Redux</h1>
      <Navigation />
      <Outlet />
    </>
  );
}