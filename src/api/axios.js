import axios from "axios";

const instance = axios.create({
  baseURL: "https://tasks-app-0m6p.onrender.com/api",
  withCredentials: true,
});

export default instance;
