import { findTodoById, getNextTodoId, mockTodos, type TodosState } from "@features/todos/todosHelpers.ts";
import { createSlice, type PayloadAction } from "@reduxjs/toolkit";
import type { RootState } from "@store/store.ts";
import type { Tag } from "@/types/Tag.ts";
import type { Todo } from "@/types/Todo.ts";

const initialState: TodosState = {
  todos: [...mockTodos], /* temporary mock todos */
};

export const todosSlice = createSlice({
  name: "todos",
  initialState,
  reducers: {
    addTodo: (state: TodosState, action: PayloadAction<Todo>) => {
      const { title, description, tags, isCompleted } = action.payload;

      state.todos.push({
        id: getNextTodoId(state), title, description, tags, isCompleted
      });
    },
    toggleTodo: (state: TodosState, action: PayloadAction<Todo>) => {
      const { id } = action.payload;
      const existingTodo = findTodoById(state, id);

      if (existingTodo) {
        existingTodo.isCompleted = !existingTodo.isCompleted;
      }
    },
    updateTodo: (state: TodosState, action: PayloadAction<Todo>) => {
      const { id, title, description } = action.payload;
      const existingTodo = findTodoById(state, id);

      if (existingTodo) {
        existingTodo.title = title;
        existingTodo.description = description;
      }
    },
    deleteTodo: (state: TodosState, action: PayloadAction<Todo>) => {
      const { id } = action.payload;
      state.todos = state.todos.filter((todo) => todo.id !== id);
    },
    /**
     * TODO: this will be tidied up to possibly apply via `updateTodo` instead.
     * TODO: simplify logic to remove double handling
     * @param state
     * @param action
     */
    toggleTodoTag: (state: TodosState, action: PayloadAction<{ todo: Todo, tag: Tag }>) => {
      const { id } = action.payload.todo;
      const { tag } = action.payload;
      const existingTodo = findTodoById(state, id);

      if (existingTodo) {
        const tagExists = existingTodo.tags.map((_) => _.id).includes(tag.id);

        if (tagExists) {
          existingTodo.tags = [...existingTodo.tags.filter((_) => _.id !== tag.id)];
        }
        else {
          existingTodo.tags.push(tag);
        }
      }
    },
  },
});

export const { addTodo, toggleTodo, deleteTodo, toggleTodoTag } = todosSlice.actions;

export const selectTodos = (state: RootState) => state.todos.todos;

export default todosSlice.reducer;
