import { configureStore } from "@reduxjs/toolkit";
import counterReducer from "@features/counter/counterSlice.ts";
import todosReducer from "@features/todos/todosSlice.ts";

export const store = configureStore({
  reducer: {
    counter: counterReducer,
    todos: todosReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
export type AppStore = typeof store;
