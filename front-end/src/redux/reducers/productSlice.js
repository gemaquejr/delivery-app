import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  products: [],
  orders: [],
  totalValue: 0,
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
    setProductsQty: (state, action) => {
      state.orders = state.orders.map((item) => {
        if (item.idP === action.payload.idP) {
          item.quantidadeP = action.payload.quantidadeP;
        }
        return item;
      });
    },
    setTotalValue: (state, action) => {
      state.totalValue = action.payload;
    },
  },
});

export const {
  setProducts, addOrders, increment, decrement, setProductsQty, setTotalValue,
} = productSlice.actions;

export default productSlice.reducer;
