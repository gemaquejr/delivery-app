import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  products: [],
  pedido: {
    id: 0,
    nome: '',
    quantidade: 0,
    valor: 0,
    subTotal: 0,
  },
  arrayDePedidos: [],
  valorTotal: 0,
};

const productSlice = createSlice({
  name: 'products',
  initialState,
  reducers: {
    setProducts: (state, action) => {
      state.products = action.payload;
    },
  },
});

export const { setProducts } = productSlice.actions;

export default productSlice.reducer;
