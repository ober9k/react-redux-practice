import Modal from "@components/Modal.tsx";
import DeleteButton from "@features/todos/buttons/DeleteButton.tsx";
import TickButton from "@features/todos/buttons/TickButton.tsx";
import { TagList } from "@features/todos/TagList.tsx";
import TodoForm from "@features/todos/TodoForm.tsx";
import { mockTags } from "@features/todos/todosHelpers.ts";
import { deleteTodo, toggleTodo, toggleTodoTag } from "@features/todos/todosSlice.ts";
import { useAppDispatch, useAppSelector } from "@hooks/hooks.ts";
import type { Tag } from "@/types/Tag.ts";
import type { Todo } from "@/types/Todo.ts";
import { type ReactNode, useState } from "react";

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
  const buildToggleTagHandler = (todo: Todo) => (tag: Tag) => {
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
            <TickButton isTicked={todo.isCompleted} toggleHandler={handleComplete(todo)} />
            {todo.title} <small>({todo.isCompleted ? "completed" : "pending"})</small>
            <DeleteButton toggleHandler={handleDelete(todo)} />
            <p>
              {todo.description}
            </p>
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
