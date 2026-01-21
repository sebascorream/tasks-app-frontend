import axios from "axios";

const instance = axios.create({
  baseURL: "https://tasks-app-backend-production.up.railway.app/api",
  withCredentials: true,
});

export default instance;