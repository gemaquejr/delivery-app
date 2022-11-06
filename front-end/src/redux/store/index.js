import { configureStore } from '@reduxjs/toolkit';
import loginSlice from '../reducers/loginSlice';
import productSlice from '../reducers/productSlice';
import userSlice from '../reducers/userSlice';

const store = configureStore({
  reducer: {
    loginSlice,
    productSlice,
    userSlice,
  },
});

export default store;
