// import { ADD_TODO, TOGGLE_TODO } from "../actions/todoActions";

import axios from "axios";

const { createSlice, createAsyncThunk } = require("@reduxjs/toolkit");

const initialState = {
  todos: [],
};

export const getInitialStateAsync = createAsyncThunk(
  "todo/setInitialState",
  (arg, thunkAPI) => {
    axios.get("http://localhost:4100/api/todos").then((res) => {
      console.log(res.data);
      // dispatch(actions.setInitialState(res.data));
      thunkAPI.dispatch(actions.setInitialState(res.data));
    });
  }
);
// A function that accepts an initial state, an object of reducer functions, and a "slice name", and automatically generates action creators and action types that correspond to the reducers and state.
const todoSlice = createSlice({
  name: "todo",
  initialState,
  reducers: {
    setInitialState: (state, action) => {
      state.todos = [...action.payload];
    },
    add: (state, action) => {
      state.todos.push({
        text: action.payload,
        completed: false,
      });
    },
    toggle: (state, action) => {
      state.todos.map((todo, i) => {
        if (i === action.payload) {
          todo.completed = !todo.completed;
        }
        return todo;
      });
    },
  },
});

// Export the reducer
export const todoReducer = todoSlice.reducer;
// Export the actions defined inside of the reducer

export const actions = todoSlice.actions;

// Selector
export const todoSelector = (state) => state.todoReducer.todos;

// export function todoReducer(state = initialState, action) {
//   switch (action.type) {
//     case ADD_TODO:
//       return {
//         ...state,
//         todos: [
//           ...state.todos,
//           {
//             text: action.text,
//             completed: false,
//           },
//         ],
//       };
//     case TOGGLE_TODO:
//       return {
//         ...state,
//         todos: state.todos.map((todo, i) => {
//           if (i === action.index) {
//             todo.completed = !todo.completed;
//           }
//           return todo;
//         }),
//       };
//     default:
//       return state;
//   }
// }
