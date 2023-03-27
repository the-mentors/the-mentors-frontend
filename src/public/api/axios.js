import axios from "axios";
import { getToken } from "../shared/localStorage";
import { API_BASE_URL } from "./elements"

export const instance = axios.create({
  baseURL: API_BASE_URL
});

instance.interceptors.request.use(
  (config) => {
    const token = getToken();
    if (token) {
      config.headers["Authorization"] = `Bearer ${token}`
    }
    return config;
  },
  (error) => {
    console.log(error);
    return Promise.reject(error);
  }
);



export const loadProfile = async () => await instance.get("/api/v1/users");