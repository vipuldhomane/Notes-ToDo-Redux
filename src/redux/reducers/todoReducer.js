// import { ADD_TODO, TOGGLE_TODO } from "../actions/todoActions";

const { createSlice } = require("@reduxjs/toolkit");

const initialState = {
  todos: [
    { text: "Go to Gym at 6", completed: false },
    { text: "Study at 8", completed: true },
  ],
};
// A function that accepts an initial state, an object of reducer functions, and a "slice name", and automatically generates action creators and action types that correspond to the reducers and state.
const todoSlice = createSlice({
  name: "todo",
  initialState,
  reducers: {
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
