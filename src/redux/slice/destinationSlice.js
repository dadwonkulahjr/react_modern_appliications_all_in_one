import { createSlice } from "@reduxjs/toolkit";
import { resetReduxOPedia } from "../action/action";

const initialState = () => {
  return {
    destination: [
      {
        name: "Hong Kong",
        days: 7,
        fact: "World's longest covered escalator",
      },
      {
        name: "Japan",
        days: 10,
        fact: "Japan is mostly mountains",
      },
      {
        name: "New Zealand",
        days: 14,
        fact: "Last country in the world to be inhabited by humans!",
      },
    ],
    destinationSelected: null,
  };
};

export const destinationSlice = createSlice({
  name: "destination",
  initialState: initialState,
  reducers: {
    destinationClicked: (state, action) => {
      state.destinationSelected = action.payload;
      // console.log(action);
    },
    // resetDestination: (state, action) => {
    //   console.log(action);
    //   state.destinationSelected = null;
    // },
  },
  extraReducers: (builder) => {
    builder.addCase(resetReduxOPedia, (state) => {
      // state.count = Number(action.payload);
      state.destinationSelected = null;
    });
  },
});

export const destinationReducer = destinationSlice.reducer;
export const { destinationClicked, resetDestination } =
  destinationSlice.actions;

// console.log(destinationSlice.actions.resetDestination.toString());
