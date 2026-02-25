import Modal from "@components/Modal.tsx";
import TodoForm from "@features/todos/TodoForm.tsx";
import TodoList from "@features/todos/TodoList.tsx";
import { useAppSelector } from "@hooks/hooks.ts";
import { useState } from "react";

export default function Todos() {
  const todos = useAppSelector((state) => state.todos.todos);
  /*const dispatch = useAppDispatch();*/

  const [ open, setOpen ] = useState(false);

  const closeHandler = () => {
    setOpen(false);
  };

  /*const handleComplete = (todo: Todo) => () => {
    dispatch(toggleTodo(todo));
  };*/

  /*const handleDelete = (todo: Todo) => () => {
    dispatch(deleteTodo(todo));
  };*/

  /**
   * Provide a handler to the
   * @param todo
   */
  /*const buildToggleTagHandler = (todo: Todo) => (tag: Tag) => {
    dispatch(toggleTodoTag({ todo, tag }));
  }*/

  /*
  mockTags.filter((tag) => !todo.tags.includes(tag))} toggleHandler={buildToggleTagHandler(todo)
   */

  return (
    <div className="p-2">
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
      <div className="m-2 p-2 bg-gray-100">
        <TodoList todos={todos} />
      </div>
    </div>
  );
}
