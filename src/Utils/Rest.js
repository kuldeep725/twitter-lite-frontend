import axios from "axios";
import { getToken } from "./Common";

const env = require("dotenv").config({ path: "../.env.local" });
console.log({ env });

const endpoints = {
  LOGIN_API: "/api/users/login",
  VERIFY_TOKEN_API: "/api/users/verifytoken",
  GET_ALL_USERS_API: "/api/allusers",
  GET_FOLLOWINGS_API: "/api/following",
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
  return axios.get(`${endpoints.VERIFY_TOKEN_API}?token=${token}`);
};

const getAllUsers = async () => {
  console.log("Calling getAllUsers api...");
  return axios.get(endpoints.GET_ALL_USERS_API, getHeaders());
};

const getFollowings = async () => {
  console.log("Calling getFollowings api...");
  return axios.get(endpoints.GET_FOLLOWINGS_API, getHeaders());
};



export { login, verifyToken, getAllUsers, getFollowings };
