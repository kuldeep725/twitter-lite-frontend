import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  followings: [],
  followers: [],
  allUsers: []
};

export const FollowSlice = createSlice({
  name: "follow",
  initialState,
  reducers: {
    setFollowings: (state, action) => {
      state.followings = action.payload;
    },
    setFollowers: (state, action) => {
      state.followers = action.payload;
    },
    setAllUsers: (state, action) => {
      state.allUsers = action.payload;
    }
  },
});

export const { setFollowers, setFollowings, setAllUsers } = FollowSlice.actions;

export default FollowSlice.reducer;
