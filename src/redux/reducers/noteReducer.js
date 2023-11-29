// import { ADD_NOTE, DELETE_NOTE } from "../actions/noteActions";

const { createSlice } = require("@reduxjs/toolkit");

const initialState = {
  notes: [{ text: "New note", createdOn: new Date() }],
};

const noteSlice = createSlice({
  name: "note",
  initialState,
  reducers: {
    add: (state, action) => {
      state.notes.push({
        text: action.payload,
        createdOn: new Date(),
      });
    },
    delete: (state, action) => {
      state.notes.splice(action.payload, 1);
    },
  },
});

export const noteReducer = noteSlice.reducer;

export const actions = noteSlice.actions;

// Doing this to simplyfy the useSelector hook
export const noteSelector = (state) => state.noteReducer.notes;

// export function noteReducer(state = initialState, action) {
//   switch (action.type) {
//     case ADD_NOTE:
//       return {
//         ...state,
//         notes: [
//           ...state.notes,
//           {
//             text: action.text,
//             createdOn: new Date(),
//           },
//         ],
//       };

//     case DELETE_NOTE:
//       state.notes.splice(action.index, 1);
//       console.log(state.notes);
//       return {
//         ...state,
//         notes: state.notes,
//       };

//     default:
//       return state;
//   }
// }
