import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  products: [],
  orders: [],
  valorTotal: 0,
};

const productSlice = createSlice({
  name: 'products',
  initialState,
  reducers: {
    setProducts: (state, action) => {
      state.products = action.payload;
    },
    addOrders: (state, action) => {
      state.orders = [...state.orders, action.payload];
    },
    increment: (state, action) => {
      state.orders = state.orders.map((item) => {
        if (item.idP === action.payload.idP) {
          item.quantidadeP += 1;
        }
        return item;
      });
    },
    decrement: (state, action) => {
      state.orders = state.orders.map((item) => {
        if (item.idP === action.payload.idP) {
          item.quantidadeP -= 1;
        }
        return item;
      });
    },
  },
});

export const { setProducts, addOrders, increment, decrement } = productSlice.actions;

export default productSlice.reducer;
