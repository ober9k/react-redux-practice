import Todos from "@features/todos/Todos.tsx";
import { useTitleBar } from "@hooks/hooks.ts";

export default function TodosPage() {
  useTitleBar("Todos");

  return (
    <>
      <h2>Todos ft. Redux</h2>
      <p>
        This page will include the todos.
      </p>
      <h3>Todos</h3>
      <Todos/>
    </>
  );
}
