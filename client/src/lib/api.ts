import axios from "axios";

const api = axios.create({
  baseURL: "https://api.rasoihire.tech",
  withCredentials: true,
});

export default api;