import axios from 'axios';

const instance = axios.create({
  baseURL: 'http://localhost:3001',
});

const login = async ({ email, password }) => {
  try {
    const { data } = await instance.post('/login', { email, password });

    return data;
  } catch (error) {
    return error;
  }
};

export default login;
