import { createSlice, nanoid } from "@reduxjs/toolkit";

const initialState = {
  data: [
    {
      id: 0,
      todo:"default",
      checked: false,
    },
  ],
}

const todoSlice = createSlice({
  name: "todo",
  initialState,

  reducers: {
    addTodo: (state, action) => {
      const info = {
        id: nanoid(),
        todo: action.payload
      };
      
      state.data.push(info);
    },
  
    deleteTodo: (state, action) => {

      state.data = state.data.filter((item) => (
        item.id !== action.payload
      ))
  
    },

    // updateTodo: (state, action) => {
    //   state.data.filter((item) => {
    //     item.id === action.payload ? item.todo = " " : null
    //   })
    // },

    markTodo: (state, action) => {
      state.data.filter((item) => (
        item.id === action.payload ? item.checked = !item.checked : null
      ))
    }

  }

})


export const {addTodo, deleteTodo, markTodo} = todoSlice.actions
export default todoSlice.reducer