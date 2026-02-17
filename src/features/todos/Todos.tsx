import Button from "../../components/Button.tsx";
import { useAppDispatch, useAppSelector } from "../../hooks/hooks.ts";
import TodoForm from "./TodoForm.tsx";
import { addTodo, completeTodo, deleteTodo, type Todo } from "./todosSlice.ts";

export default function Todos() {
  const todos = useAppSelector((state) => state.todos.todos);
  const dispatch = useAppDispatch();

  const handleComplete = (todo: Todo) => () => {
    dispatch(completeTodo(todo));
  };

  const handleDelete = (todo: Todo) => () => {
    dispatch(deleteTodo(todo));
  };

  return (
    <div>
      <p>
        Todos (length): {todos.length}
      </p>
      <div>
        <TodoForm />
      </div>
      <ul>
        {todos.map((todo) => (
          <li key={todo.id}>
            #{todo.id}: {todo.title} <small>({todo.isComplete ? "completed" : "pending"})</small>
            <div>
              <Button onClick={handleComplete(todo)}>Complete</Button>
              <Button onClick={handleDelete(todo)}>Delete</Button>
            </div>
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
