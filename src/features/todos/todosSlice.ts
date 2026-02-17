import { createSlice, type PayloadAction } from "@reduxjs/toolkit";

export interface Todo {
  id: number,
  title: string,
  isComplete: boolean,
}

export interface TodosState {
  value: Array<Todo>,
}

const initialState: TodosState = {
  value: [{
    id: 1,
    title: "Example Todo",
    isComplete: false,
  }],
};

export const todosSlice = createSlice({
  name: "todos",
  initialState,
  reducers: {
    addTodo: (state, action: PayloadAction<Todo>) => {
      state.push(action);
    },
  },
});

export const { addTodo } = todosSlice.actions;

export default todosSlice.reducer;
