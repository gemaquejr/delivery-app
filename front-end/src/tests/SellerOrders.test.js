import React from 'react';
import { screen } from '@testing-library/react';
import App from '../App';
import renderWithRouter from './helpers/RenderWithRouter';

const SELLER_ORDERS_ROUTER = '/seller/orders';
describe('Tela de Pedidos do Vendedor', () => {
  xtest('Verifica se tela de pedidos do vendedor possui "numero do pedido" ', () => {
    renderWithRouter(<App />, [SELLER_ORDERS_ROUTER]);
    const orderNumber = screen
      .getByTestId('seller_orders__element-order-id-<id>');
    expect(orderNumber).toBeInTheDocument();
  });
  xtest('Verifica se tela de pedidos do vendedor possui "status do pedido" ', () => {
    renderWithRouter(<App />, [SELLER_ORDERS_ROUTER]);
    const orderStatus = screen
      .getByTestId('seller_orders__element-delivery-status-<id>');
    expect(orderStatus).toBeInTheDocument();
  });
  xtest('Verifica se tela de pedidos do vendedor possui "data do pedido" ', () => {
    renderWithRouter(<App />, [SELLER_ORDERS_ROUTER]);
    const orderDate = screen
      .getByTestId('seller_orders__element-order-date-<id>');
    expect(orderDate).toBeInTheDocument();
  });
  xtest('Verifica se tela de pedidos do vendedor possui "preco do pedido" ', () => {
    renderWithRouter(<App />, [SELLER_ORDERS_ROUTER]);
    const orderValue = screen
      .getByTestId('seller_orders__element-card-price-<id>');
    expect(orderValue).toBeInTheDocument();
  });
  xtest('Verifica se tela de pedidos do vendedor possui "endereco do pedido" ', () => {
    renderWithRouter(<App />, [SELLER_ORDERS_ROUTER]);
    const orderAddres = screen
      .getByTestId('seller_orders__element-card-address-<id>');
    expect(orderAddres).toBeInTheDocument();
  });
});
