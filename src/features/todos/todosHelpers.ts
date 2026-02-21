import type { Todo } from "@types/Todo.ts";

export function getNextTodoId(state): number {
  return state.todos.length + 1;
}

export function findTodoById(state, id: number): Todo {
  return state.todos.find((todo) => todo.id === id);
}

export const mockTodos = [{
  id: 1,
  title: "Example Todo #1",
  description: "Example Description",
  tags: [],
  isCompleted: false,
},{
  id: 2,
  title: "Example Todo #2",
  description: "Example Description",
  tags: [],
  isCompleted: false,
}];
