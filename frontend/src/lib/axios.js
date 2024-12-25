import axios from "axios";

export const axiosInstance = axios.create({
  baseURL:
    import.meta.env.MODE === "development"
      ? "https://chat-api-chgf.onrender.com/api"
      : "/api",
  withCredentials: true,
});
