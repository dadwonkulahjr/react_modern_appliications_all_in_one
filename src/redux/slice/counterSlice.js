import { createSlice } from "@reduxjs/toolkit";
import { resetDestination } from "./destinationSlice";
import { resetReduxOPedia } from "../action/action";

const initialState = { count: 10 };

export const counterSlice = createSlice({
  name: "counter",
  initialState: initialState,
  reducers: {
    //Define all actions!
    increment: (state) => {
      state.count += 1;
    },
    decrement: (state) => {
      state.count -= 1;
    },
    decrementMultiplier: (state, action) => {
      state.count -= action.payload;
    },
    incrementMultiplier: (state, action) => {
      state.count += Number(action.payload);
    },
    // resetCounter: (state) => {
    //   state.count = 10;
    // },
  },
  extraReducers: (builder) => {
    builder.addCase(resetReduxOPedia, (state) => {
      // state.count = Number(action.payload);
      state.count = 10;
    });
  },
});

export const {
  increment,
  decrement,
  incrementMultiplier,
  decrementMultiplier,
} = counterSlice.actions;
export const counterReducer = counterSlice.reducer;
