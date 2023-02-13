import axios from 'axios';
const URL = 'https://registration-app-demo.herokuapp.com';
export const loginAPI = async (payload) => {
  const data = await axios.post(`${URL}/login`, payload);
  return data;
};
export const registerAPI = (payload) => {
  const data = axios.post(`${URL}/register`, payload);
  return data;
};
