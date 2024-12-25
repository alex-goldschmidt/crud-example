import axios from "axios";
export const axiosSafeRequest = async (method, url, data = null) => {
  try {
    const response = await axios[method](url, data);
    return response.data;
  } catch (error) {
    console.log("Axios request failed:", error.message);
  }
};
