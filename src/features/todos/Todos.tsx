import Button from "@components/Button.tsx";
import Modal from "@components/Modal.tsx";
import { TagList } from "@features/todos/TagList.tsx";
import TodoForm from "@features/todos/TodoForm.tsx";
import { mockTags } from "@features/todos/todosHelpers.ts";
import { deleteTodo, toggleTodo, toggleTodoTag } from "@features/todos/todosSlice.ts";
import { useAppDispatch, useAppSelector } from "@hooks/hooks.ts";
import type { Todo } from "@types/Todo.ts";
import * as React from "react";
import { ReactNode, useState } from "react";

type TagsHeadingProps = {
  children: ReactNode,
}

function TagHeading({ children }: TagsHeadingProps) {
  return (
    <h3 className="p-2 pb-1 text-xs font-medium">
      {children}
    </h3>
  )
}

export default function Todos() {
  const todos = useAppSelector((state) => state.todos.todos);
  const dispatch = useAppDispatch();

  const [ open, setOpen ] = useState(false);

  const closeHandler = () => {
    setOpen(false);
  };

  const handleComplete = (todo: Todo) => () => {
    dispatch(toggleTodo(todo));
  };

  const handleDelete = (todo: Todo) => () => {
    dispatch(deleteTodo(todo));
  };

  /**
   * Provide a handler to the
   * @param todo
   */
  const buildToggleTagHandler = (todo) => (tag) => {
    dispatch(toggleTodoTag({ todo, tag }));
  }

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
      <div>
      </div>
      <ul>
        {todos.map((todo) => (
          <li key={todo.id}>
            #{todo.id}: {todo.title} <small>({todo.isCompleted ? "completed" : "pending"})</small>
            <p>
              {todo.description}
            </p>
            <div>
              <Button onClick={handleComplete(todo)}>Complete</Button>
              <Button onClick={handleDelete(todo)}>Delete</Button>
            </div>
            <TagHeading>
              Selected Tags:
            </TagHeading>
            <TagList tags={todo.tags} toggleHandler={buildToggleTagHandler(todo)} />
            <TagHeading>
              Unselected Tags:
            </TagHeading>
            <TagList tags={mockTags.filter((tag) => !todo.tags.includes(tag))} toggleHandler={buildToggleTagHandler(todo)} />
          </li>
        ))}
      </ul>
    </div>
  );
}
