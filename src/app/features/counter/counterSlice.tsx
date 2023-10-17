import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  count: 0,
  adjustmentCount: 0,
};

export const counterSlice = createSlice({
  name: "counter",
  initialState,
  reducers: {
    increment: (state, action) => {
      const { stateType } = action.payload;
      state[stateType] += 1;
    },
    decrement: (state, action) => {
      const { stateType } = action.payload;
      state[stateType] -= 1;
    },
    reset: (state) => {
      state.count = 0;
      state.adjustmentCount = 0;
    },
    incrementByAmount: (state) => {
      state.count += state.adjustmentCount;
    },
    equalizer: (state, action) => {
      const { amount } = action.payload;
      state.adjustmentCount = Number(amount);
    },
  },
});

// Now we need to export our reducers actions

export const { increment, decrement, reset, incrementByAmount, equalizer } =
  counterSlice.actions;

// And also we need to export reducers itself.

export default counterSlice.reducer;
