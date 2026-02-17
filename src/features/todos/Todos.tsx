import { useAppDispatch, useAppSelector } from "../../hooks/hooks.ts";
import { addTodo, completeTodo } from "./todosSlice.ts";

export default function Todos() {
  const todos = useAppSelector((state) => state.todos.todos);

  console.log(todos.length);
  const dispatch = useAppDispatch();

  return (
    <div>
      <p>
        Todos (length): {todos.length}
      </p>
      <ul>
        {todos.map((todo) => (
          <li key={todo.id}>
            #{todo.id}: {todo.title} <small onClick={() => dispatch(completeTodo(todo))}>({todo.isComplete ? "completed" : "pending"})</small>
          </li>
        ))}
      </ul>
      <p>
        <button onClick={() => dispatch(addTodo({
          title: "Manually Dispatched #1",
          isComplete: false,
        }))}>Add Todo</button>
      </p>
    </div>
  );
}
