import axios from "axios";
import { API_URL } from "../../../constants/axios/config";

export const verifyToken = async () => {
  try {
    const response = await axios.get(`${API_URL}/api/v1/verify-token`);

    return response.data;
  } catch (error) {
    return error;
  }
};
