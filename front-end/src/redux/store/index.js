import { configureStore } from '@reduxjs/toolkit';
import loginSlice from '../reducers/loginSlice';
import productSlice from '../reducers/productSlice';

const store = configureStore({
  reducer: {
    loginSlice,
    productSlice,
  },
});

export default store;
