import axios from 'axios';

const instance = axios.create({
  baseURL: 'http://localhost:3001',
});

const login = async ({ email, password }) => {
  try {
    const { data } = await instance.post('/login', { email, password });

    return data;
  } catch (err) {
    // console.log(err.response.data.message);
    return {
      message: err.response.data.message,
    };
  }
};

const register = async ({ name, email, password }) => {
  try {
    const { data } = await instance.post('/register', { name, email, password });
    return data;
  } catch (err) {
    return {
      message: err.response.data.message,
    };
  }
};

const products = async () => {
  const { data } = await instance.get('/products');

  return data;
};

const findAllSellers = async () => {
  const { data } = await instance.get('/sellers');
  return data;
};

export {
  login,
  register,
  products,
  findAllSellers,
};
