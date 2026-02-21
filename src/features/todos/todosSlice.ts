import { findTodoById, getNextTodoId, mockTodos } from "@features/todos/todosHelpers.ts";
import { createSlice, type PayloadAction } from "@reduxjs/toolkit";
import type { RootState } from "@store/store.ts";
import type { Todo } from "@types/Todo.ts";

export interface TodosState {
  todos: Array<Todo>,
}

const initialState: TodosState = {
  todos: [...mockTodos], /* temporary mock todos */
};

export const todosSlice = createSlice({
  name: "todos",
  initialState,
  reducers: {
    addTodo: (state, action: PayloadAction<Todo>) => {
      const { title, description, tags, isCompleted } = action.payload;

      state.todos.push({
        id: getNextTodoId(state), title, description, tags, isCompleted
      });
    },
    toggleTodo: (state, action: PayloadAction<Todo>) => {
      const { id } = action.payload;
      const existingTodo = findTodoById(state, id);

      if (existingTodo) {
        existingTodo.isCompleted = !existingTodo.isCompleted;
      }
    },
    updateTodo: (state, action: PayloadAction<Todo>) => {
      const { id, title, description } = action.payload;
      const existingTodo = findTodoById(state, id);

      if (existingTodo) {
        existingTodo.title = title;
        existingTodo.description = description;
      }
    },
    deleteTodo: (state, action: PayloadAction<Todo>) => {
      const { id } = action.payload;
      state.todos = state.todos.filter((todo) => todo.id !== id);
    },
  },
});

export const { addTodo, toggleTodo, deleteTodo } = todosSlice.actions;

export const selectTodos = (state: RootState) => state.todos.todos;

export default todosSlice.reducer;
