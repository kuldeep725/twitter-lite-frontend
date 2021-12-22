import axios from "axios";
import { getToken } from "./Common";

const env = require("dotenv").config({ path: "../.env.local" });
console.log({ env });

const endpoints = {
  LOGIN_API: "/api/users/login",
  VERIFY_TOKEN_API: "/api/users/verifytoken",
  GET_ALL_USERS_API: "/api/userdetails",
  GET_FOLLOWINGS_API: "/api/following",
  GET_FOLLOWERS_API: "/api/follower",
};

const getHeaders = () => {
  return {
    headers: {
      Authorization: `Bearer ${getToken()}`,
    },
  };
};

const login = async (username, password) => {
  console.log("Calling login api...");
  return axios.post(endpoints.LOGIN_API, { username, password });
};

const verifyToken = async (token) => {
  console.log("Calling verify api...");
  return axios.get(endpoints.VERIFY_TOKEN_API, { params: { token } });
};

const getAllUsers = async () => {
  console.log("Calling getAllUsers api...");
  return axios.get(endpoints.GET_ALL_USERS_API, getHeaders());
};

const getFollowings = async () => {
  console.log("Calling getFollowings api...");
  return axios.get(endpoints.GET_FOLLOWINGS_API, getHeaders());
};

const followUser = async (followingId) => {
  console.log("Calling followUser api...");
  return axios.post(`/api/following/${followingId}`, null, getHeaders());
};

const unfollowUser = async (followingId) => {
  console.log("Calling unfollowUser api...");
  return axios.delete(`/api/following/${followingId}`, null, getHeaders());
};

const getFollowers = async () => {
  console.log("Calling getFollowers api...");
  return axios.get("/api/follower", getHeaders());
};

const createPost = async (post) => {
  console.log("Calling createPost api...");
  return axios.post("/api/post", post, getHeaders());
};

const deletePost = async (postId) => {
  console.log("deletePost api...");
  return axios.delete(`api/post/${postId}`, getHeaders());
}

const getPosts = async () => {
  console.log("Calling getPosts api...");
  return axios.get("/api/post", getHeaders());
};

const likePost = async (postId) => {
  console.log("likePost api...");
  return axios.post(`api/post/${postId}/like`, null, getHeaders());
}

const unlikePost = async (postId) => {
  console.log("unlikePost api...");
  return axios.delete(`api/post/${postId}/like`, null, getHeaders());
}

const commentOnPost = async (postId, comment) => {
  console.log("commentPost api...");
  return axios.post(`api/post/${postId}/comment`, comment, getHeaders());
}

const retweetPost = async (postId) => {
  console.log("retweetPost api...");
  return axios.post(`api/post/${postId}/retweet`, null, getHeaders());
}

const undoRetweetPost = async (postId) => {
  console.log("undoRetweetPost api...");
  return axios.delete(`api/post/${postId}/retweet`, null, getHeaders());
}

const Rest = {
  login,
  verifyToken,
  getAllUsers,
  getFollowings,
  followUser,
  unfollowUser,
  getFollowers,
  createPost,
  getPosts
};
export default Rest;
