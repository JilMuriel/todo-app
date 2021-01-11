import { createSlice } from "@reduxjs/toolkit";

export const todoSlice = createSlice({
  name: "todo",
  initialState: [],
  reducers: {
    addTodo: (state, action) => {
      return [
        ...state,
        { id: Date.now(), title: action.payload, completed: false },
      ];
    },
    removeTodo: (state, action) => {
      return state.filter((res) => res !== action.payload);
    },
    toggleTodo: (state, action) => {
      const todo = state.find((todo) => todo.id === action.payload);
      if (todo) {
        todo.completed = !todo.completed;
      }
    },
  },
});

export const { addTodo, removeTodo, toggleTodo } = todoSlice.actions;

export const SelectTodoItems = (state) => state.todo;

export default todoSlice.reducer;
