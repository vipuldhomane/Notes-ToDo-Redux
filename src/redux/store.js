// const redux = require("redux");

// import * as redux from "redux";
import { todoReducer } from "./reducers/todoReducer";
import { noteReducer } from "./reducers/noteReducer";
import { configureStore, getDefaultMiddleware } from "@reduxjs/toolkit";
import { notificationReducer } from "./reducers/notificationReducer";
import { loggerMiddleware } from "./midllewares/loggerMiddleware";

// const result = redux.combineReducers({
//   todoReducer,
//   noteReducer,
// });

// export const store = redux.createStore(result);

// no need to  use the combine the reducers as it it taken care by the toolkit itself

export const store = configureStore({
  reducer: {
    todoReducer,
    noteReducer,
    notificationReducer,
  },
  middleware: [...getDefaultMiddleware(), loggerMiddleware],
});
