import axios from "axios";

export const uploadFile = async (url, file) => {
  if (file) {
    const formData = new FormData();
    formData.append("profile", file);
    try {
        const response = await axios.post(url, formData);
        return response;
      } catch (error) {
        throw error;
      }
    } else {
      return;
    }
};
