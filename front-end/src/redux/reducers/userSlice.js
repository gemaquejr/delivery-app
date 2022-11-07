import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  address: '',
  addressNumber: '',
};

const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    setUserAddress: (state, action) => {
      state.address = action.payload;
    },
    setUserAddressNumber: (state, action) => {
      state.addressNumber = action.payload;
    },
  },
});

export const { setUserAddress, setUserAddressNumber } = userSlice.actions;

export default userSlice.reducer;
