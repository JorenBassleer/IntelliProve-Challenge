import axios from 'axios';

const useAxios = () => {
  const instance = axios.create({
    baseURL: import.meta.env.VITE_API_URL,
    headers: {
      'x-api-key': `${import.meta.env.VITE_API_KEY}`,
      'Content-Type': 'application/json',
    },
  });

  return { instance };
};

export default useAxios;
