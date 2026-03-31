import axios from "axios";

const instance = axios.create({
  baseURL: "https://tasks-app-backend-1.onrender.com/api",
  withCredentials: true,
});

export default instance;