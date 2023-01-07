import axios from "axios";
import { config } from "./config";

export const getAnimes = async (): Promise<any> => {
    try {
      const response = await axios(config);
      return response.data.data;
    } catch (error) {
      return error;
    }
};