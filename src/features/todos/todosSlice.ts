import { createSlice, type PayloadAction } from "@reduxjs/toolkit";
import type { RootState } from "../../store/store.ts";
import type { Todo } from "../../types/Todo.ts";

export interface TodosState {
  todos: Array<Todo>,
}

const initialState: TodosState = {
  todos: [{
    id: 1,
    title: "Example Todo #1",
    description: "Example Description",
    tags: [],
    isComplete: false,
  },{
    id: 2,
    title: "Example Todo #2",
    description: "Example Description",
    tags: [],
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
    deleteTodo: (state, action: PayloadAction<Todo>) => {
      const { id } = action.payload;
      state.todos = state.todos.filter((todo) => todo.id !== id);
    },
  },
});

export const { addTodo, completeTodo, deleteTodo } = todosSlice.actions;

export const selectCount = (state: RootState) => state.todos.todos;

export default todosSlice.reducer;
