import { configureStore } from '@reduxjs/toolkit';
import loginSlice from '../reducers/loginSlice';

const store = configureStore({
  reducer: {
    loginSlice,
  },
});

export default store;
