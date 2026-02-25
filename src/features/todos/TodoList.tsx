import type { Todo } from "@/types/Todo.ts";
import classes from "@/features/todos/TodoList.module.css";
import DeleteButton from "@features/todos/buttons/DeleteButton.tsx";
import TickButton from "@features/todos/buttons/TickButton.tsx";
import { TagList } from "@features/todos/TagList.tsx";

type Props = {
  todos: Array<Todo>,
}

export default function TodoList({ todos }: Props) {
  return (
    <div className={classes.todos}>
      {todos.map((todo) => (
        <div key={todo.id} className={classes.todo}>
          <TickButton isTicked={todo.isCompleted} toggleHandler={() => {}} />
          <DeleteButton toggleHandler={() => {}} />
          <h4 className={classes.title}>
            {todo.title}
          </h4>
          <p className={classes.description}>
            {todo.description}
          </p>
          <TagList tags={todo.tags} toggleHandler={() => {}} />
        </div>
      ))}
    </div>
  );
}
