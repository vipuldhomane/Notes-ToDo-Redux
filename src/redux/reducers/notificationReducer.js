import { createSlice } from "@reduxjs/toolkit";

import { actions } from "./todoReducer";

const initialState = {
  message: "",
};

export const notificationSlice = createSlice({
  name: "notification",
  initialState,
  reducers: {
    reset: (state, action) => {
      state.message = "";
    },
  },
  // extraReducers: {
  //   "todo/add": (state, action) => {
  //     console.log("Todo/ Add extraReducer");
  //     state.message = "Todo is Created";
  //   },
  //   "note/add": (state, action) => {
  //     console.log("Todo/ Add extraReducer");
  //     state.message = "Note is Created";
  //   },
  // },
  // extraReducers: (builder) => {
  //   builder.addCase(actions.add, (state, action) => {
  //     console.log("Todo/ Add extraReducer");
  //     state.message = "Todo is Created";
  //   });
  // },

  extraReducers: {
    [actions.add]: (state, action) => {
      console.log("Todo/ Add extraReducer");
      state.message = "Todo is Created";
    },
  },
});

// Action creators are generated for each case reducer function

export const notificationReducer = notificationSlice.reducer;

export const resetNotification = notificationSlice.actions.reset;

export const notificationSelector = (state) =>
  state.notificationReducer.message;
