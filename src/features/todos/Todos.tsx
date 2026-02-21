import type { Todo } from "@types/Todo.ts";
import { useState } from "react";
import Button from "../../components/Button.tsx";
import Modal from "../../components/Modal.tsx";
import { useAppDispatch, useAppSelector } from "../../hooks/hooks.ts";
import TodoForm from "./TodoForm.tsx";
import { completeTodo, deleteTodo } from "./todosSlice.ts";

export default function Todos() {
  const todos = useAppSelector((state) => state.todos.todos);
  const dispatch = useAppDispatch();

  const [ open, setOpen ] = useState(false);

  const closeHandler = () => {
    setOpen(false);
  };

  const handleComplete = (todo: Todo) => () => {
    dispatch(completeTodo(todo));
  };

  const handleDelete = (todo: Todo) => () => {
    dispatch(deleteTodo(todo));
  };

  return (
    <div>
      {open && (
        <Modal onClose={closeHandler}>
          <TodoForm onClose={closeHandler} />
        </Modal>
      )}
      <p>
        Todos (length): {todos.length}<br/>
        <button onClick={() => setOpen(true)}>
          Add Todo
        </button>
      </p>
      <div>
      </div>
      <ul>
        {todos.map((todo) => (
          <li key={todo.id}>
            #{todo.id}: {todo.title} <small>({todo.isComplete ? "completed" : "pending"})</small>
            <p>
              {todo.description}
            </p>
            <div>
              <Button onClick={handleComplete(todo)}>Complete</Button>
              <Button onClick={handleDelete(todo)}>Delete</Button>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
}
