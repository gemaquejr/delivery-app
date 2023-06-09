import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  products: [],
  orders: [],
  totalValue: 0,
  sales: [],
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
    orderDetails: (state, action) => {
      state.orders = action.payload;
    },
    resetOrders: (state) => {
      state.orders = [];
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
    deleteOrder: (state, action) => {
      state.orders = state.orders.filter((item) => item.idP !== action.payload);
    },
    setSales: (state, action) => {
      state.sales = [...state.sales, action.payload];
    },
  },
});

export const {
  setProducts,
  addOrders,
  orderDetails,
  resetOrders,
  increment,
  decrement,
  setProductsQty,
  setTotalValue,
  deleteOrder,
  setSales,
} = productSlice.actions;

export default productSlice.reducer;
