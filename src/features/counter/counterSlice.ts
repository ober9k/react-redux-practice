import { createSlice } from "@reduxjs/toolkit";

export const counterSlice = createSlice({
  name: 'counter',
  initialState: {
    value: 0,
  },
  reducers: {
    increment: (state) => {
      // TODO: check mutating / immer library
      state.value += 1;
    },
    decrement: (state) => {
      state.value -= 1;
    },
    incrementByAmount: (state, action) => {
      state.value += action.payload;
    },
    decrementByAmount: (state, action) => {
      state.value -= action.payload; /* duplicates the above, but just fo later usage */
    },
  },
});

export const { increment, decrement, incrementByAmount, decrementByAmount } = counterSlice.actions;

export default counterSlice.reducer;
