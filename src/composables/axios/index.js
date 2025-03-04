import axios from 'axios';

const useAxios = () => {
  const instance = axios.create({
    baseURL: import.meta.env.VITE_API_URL,
    headers: {
      'Content-Type': 'application/json',
    },
  });

  return { instance };
};

export default useAxios;
