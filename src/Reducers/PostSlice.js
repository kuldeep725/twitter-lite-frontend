import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  posts: [],
  message: "",
};

export const PostSlice = createSlice({
  name: "post",
  initialState,
  reducers: {
    initializePost: (state, action) => {
      state.posts = action.payload;
    },
    updateMessage: (state, action) => {
      state.message = action.payload;
    }
  },
});

export const { initializePost, updateMessage } = PostSlice.actions;

export default PostSlice.reducer;
