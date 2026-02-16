import { configureStore } from "@reduxjs/toolkit";
import counterReducer from "../features/counter/counterSlice.ts";

export default configureStore({
  reducer: {
    counter: counterReducer,
  },
});
