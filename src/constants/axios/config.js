import axios from "axios";

export const API_URL = "http://127.0.0.1:8000";
// export const API_URL = "https://campus-orient-api-83abdb28b436.herokuapp.com";

export const headers = () => {
  const localToken = localStorage.getItem("token");

  axios.defaults.headers.common["Authorization"] = `Bearer ${localToken}`;
  axios.defaults.headers.common["Accept"] = "application/json";
};
