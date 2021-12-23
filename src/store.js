import { configureStore } from "@reduxjs/toolkit";
import postReducer from "./Reducers/PostSlice";
import followReducer from "./Reducers/FollowSlice";

export default configureStore({
  reducer: {
    post: postReducer,
    follow: followReducer,
  },
});
