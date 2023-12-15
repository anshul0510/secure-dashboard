import axios from "axios";

export const LoginServices = async (loginData) => {
  try {
    const response = await axios.post(`https://reqres.in/api/login`, loginData);
    return response;
  } catch (error) {
    return "error"
  }
};
