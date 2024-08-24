import axios from 'axios';

export const registerUser = async (userData) => {
  const res = await axios.post('/api/auth/register', userData);
  return res.data;
};

export const loginUser = async (userData) => {
  const res = await axios.post('/api/auth/login', userData);
  return res.data;
};

export const getUser = async () => {
  const res = await axios.get('/api/auth/user', {
    headers: {
      Authorization: `Bearer ${localStorage.getItem('token')}`,
    },
  });
  return res.data;
};
