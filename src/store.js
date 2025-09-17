import { configureStore } from '@reduxjs/toolkit';
import todoReducer from './todoSlice';
import githubReducer from './githubSlice';

export const store = configureStore({
  reducer: {
    todo: todoReducer,
    github: githubReducer,
  },
});