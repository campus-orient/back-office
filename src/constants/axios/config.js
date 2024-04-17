import axios from "axios";

export const API_URL = "https://campus-orient-api-83abdb28b436.herokuapp.com";

const localToken = localStorage.getItem("token");

export const headers = () => {
  axios.defaults.headers.common["Authorization"] = `Bearer ${localToken}`;
  axios.defaults.headers.common["Accept"] = "application/json";
};
