import axios from "axios";
import { API_URL, headers } from "../../../constants/axios/config";

export const fetchUsers = async () => {
  headers();
  try {
    const response = await axios.get(`${API_URL}/api/v1/users`);

    return response.data;
  } catch (error) {
    return error;
  }
};

export const createUser = async (profile) => {
  console.log("Profile", profile);
  try {
    const response = await axios.post(`${API_URL}/api/v1/users`, {
      name: profile.name,
      surname: profile.surname,
      email: profile.email,
      type: profile.type,
      password: "password",
      password_confirmation: "password",
    });

    return response.data;
  } catch (error) {
    return error;
  }
};