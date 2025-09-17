import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  tasks: [
    { id: 1, text: "Learn React" },
    { id: 2, text: "Build a To-Do App" },
    { id: 3, text: "Profit!" }
  ],
  filter: ''
};

export const todoSlice = createSlice({
  name: 'todo',
  initialState,
  reducers: {
    addTask: (state, action) => {
      state.tasks.push({ id: Date.now(), text: action.payload });
    },
    deleteTask: (state, action) => {
      state.tasks = state.tasks.filter(t => t.id !== action.payload);
    },
    setFilter: (state, action) => {
      state.filter = action.payload;
    }
  }
});

export const { addTask, deleteTask, setFilter } = todoSlice.actions;
export default todoSlice.reducer;