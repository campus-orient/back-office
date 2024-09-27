import axios from "axios";

const API_URL = import.meta.env.VITE_API_URL;

export const fetchInterestsPlaces = async () => {
  try {
    const response = await axios.get(`${API_URL}/api/v1/interests-places`);

    return response.data;
  } catch (error) {
    return error;
  }
};
