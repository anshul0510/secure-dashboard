import axios from "axios";

export const SignupServices = async (loginData) => {
  try {
    const response = await axios.post(`https://reqres.in/api/register`, loginData);
    return response;
  } catch (error) {
    return "error"
  }
};
