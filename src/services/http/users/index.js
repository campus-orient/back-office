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

export const fetchUsersLogins = async () => {
  headers();
  try {
    const response = await axios.get(`${API_URL}/api/v1/users-logins`);

    return response.data;
  } catch (error) {
    return error;
  }
};

export const createUser = async (profile) => {
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

export const updateUser = async (profile) => {
  try {
    console.log("Profile id", profile);
    const response = await axios.patch(
      `${API_URL}/api/v1/users/${profile.id}`,
      {
        name: profile.name,
        surname: profile.surname,
        // email: profile.email,
        type: profile.type,
        password: "password",
        password_confirmation: "password",
      }
    );

    return response.data;
  } catch (error) {
    return error;
  }
};

export const deleteUser = async (id) => {
  try {
    console.log("Profile id", id);
    const response = await axios.delete(`${API_URL}/api/v1/users/${id}`);

    return response.data;
  } catch (error) {
    return error;
  }
};
