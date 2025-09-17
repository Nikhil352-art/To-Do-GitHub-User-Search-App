import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

export const fetchGithubUser = createAsyncThunk(
  'github/fetchGithubUser',
  async (username, { rejectWithValue }) => {
    if (!username) return rejectWithValue("Username is empty");
    try {
      const response = await axios.get(`https://api.github.com/users/${username}`);
      return response.data;
    } catch (err) {
      return rejectWithValue("User not found");
    }
  }
);

const githubSlice = createSlice({
  name: 'github',
  initialState: {
    user: null,
    loading: false,
    error: null
  },
  reducers: {
    clearUser: (state) => {
      state.user = null;
      state.error = null;
    }
  },
  extraReducers: builder => {
    builder
      .addCase(fetchGithubUser.pending, (state) => {
        state.loading = true;
        state.error = null;
        state.user = null;
      })
      .addCase(fetchGithubUser.fulfilled, (state, action) => {
        state.loading = false;
        state.user = action.payload;
      })
      .addCase(fetchGithubUser.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
      });
  }
});

export const { clearUser } = githubSlice.actions;
export default githubSlice.reducer;