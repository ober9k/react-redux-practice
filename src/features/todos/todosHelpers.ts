import type { Tag } from "@/types/Tag.ts";
import type { Todo } from "@/types/Todo.ts";

export interface TodosState {
  todos: Array<Todo>,
}

export function getNextTodoId(state: TodosState): number {
  return state.todos.length + 1;
}

export function findTodoById(state: TodosState, id: number): Todo {
  return state.todos.find((todo) => todo.id === id);
}

export const mockTags: Array<Tag> = [{
  id: 1,
  title: "Examples",
},{
  id: 2,
  title: "Others",
},{
  id: 3,
  title: "Miscellaneous",
}];

export const mockTodos: Array<Todo> = [{
  id: 1,
  title: "Example Todo #1",
  description: "Example Description",
  tags: [
    mockTags[1],
    mockTags[2],
  ],
  isCompleted: false,
},{
  id: 2,
  title: "Example Todo #2",
  description: "Example Description",
  tags: [
    mockTags[1],
  ],
  isCompleted: false,
}];
