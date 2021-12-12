import axios from "axios";

const env = require("dotenv").config({ path: "../.env.local" });
console.log({ env });

// const URLS = {
//     LOGIN_API_URL:
// }

const login = async (username, password) => {
  console.log("Calling login api...");
  return axios.post("/api/users/login", { username, password });
};

const verifyToken = async (token) => {
  console.log("Calling verify api...");
  return axios.get(`/api/users/verifytoken?token=${token}`);
};

export { login, verifyToken };
