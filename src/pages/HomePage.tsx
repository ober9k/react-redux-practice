import { useTitleBar } from "@hooks/hooks.ts";

export default function HomePage() {
  useTitleBar("Home");

  return (
    <>
      <h2>Home</h2>
      <p>
        Hello World.
      </p>
    </>
  );
}
