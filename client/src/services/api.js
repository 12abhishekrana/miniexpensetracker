import axios from "axios";

const api = axios.create({
  baseURL: "https://miniexpensetracker-3.onrender.com/api",
});

// attach headers automatically
api.interceptors.request.use((config) => {
  const token = localStorage.getItem("token"); // optional
  const userId = localStorage.getItem("userId"); // IMPORTANT

  if (token) {
    config.headers.Authorization = token;
  }

  if (userId) {
    config.headers.userid = userId;
  }

  return config;
});

export default api;
