import axios from "axios";
import { headers } from "../../../constants/axios/config";

const API_URL = import.meta.env.VITE_API_URL;

export const verifyToken = async () => {
  try {
    const response = await axios.get(`${API_URL}/api/v1/verify-token`);

    return response.data;
  } catch (error) {
    return error;
  }
};

export const login = async (credentials) => {
  try {
    const response = await axios.post(`${API_URL}/api/v1/login`, {
      email: credentials.email,
      password: credentials.password,
    });

    return response.data;
  } catch (error) {
    return error;
  }
};

export const fetchLoggedUser = async () => {
  headers();
  try {
    const response = await axios.get(`${API_URL}/api/user`);

    return response.data;
  } catch (error) {
    return error;
  }
};
