import { createSlice, type PayloadAction } from "@reduxjs/toolkit";
import type { RootState } from "../../store/store.ts";

export interface Todo {
  id?: number,
  title: string,
  isComplete: boolean,
}

export interface TodosState {
  todos: Array<Todo>,
}

const initialState: TodosState = {
  todos: [{
    id: 1,
    title: "Example Todo #1",
    isComplete: false,
  },{
    id: 2,
    title: "Example Todo #2",
    isComplete: false,
  }],
};

export const todosSlice = createSlice({
  name: "todos",
  initialState,
  reducers: {
    addTodo: (state, action: PayloadAction<Todo>) => {
      const newTodo = {
        ...action.payload,
        id: state.todos.length + 1,
      };

      state.todos.push(newTodo);
    },
    completeTodo: (state, action: PayloadAction<Todo>) => {
      const { id } = action.payload;

      const existingTodo = state.todos.find((todo) => todo.id === id);

      if (existingTodo) {
        existingTodo.isComplete = true;
      }
    },
  },
});

export const { addTodo, completeTodo } = todosSlice.actions;

export const selectCount = (state: RootState) => state.todos.value;

export default todosSlice.reducer;
