import axios from 'axios';

const axiosInstance = axios.create({
  baseURL: import.meta.env.VITE_API_URL,
  headers: {
    Accept: 'application/json',
    'Content-Type': 'application/json',
  },
});

export const setAuthHeader = (token: string | null) => {
  if (token) axiosInstance.defaults.headers.common.Authorization = `Bearer ${token}`;
  else delete axiosInstance.defaults.headers.common.Authorization;
};

export default axiosInstance;
