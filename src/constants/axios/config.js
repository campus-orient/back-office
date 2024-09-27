import axios from "axios";

export const API_URL = import.meta.env.VITE_API_URL;

export const headers = () => {
  const localToken = localStorage.getItem("token");

  axios.defaults.headers.common["Authorization"] = `Bearer ${localToken}`;
  axios.defaults.headers.common["Accept"] = "application/json";
};
