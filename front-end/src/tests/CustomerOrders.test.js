import React from 'react';
import { screen } from '@testing-library/react';
import App from '../App';
import renderWithRouter from './helpers/RenderWithRouter';

const CHECKOUT_ROUTER = '/customer/orders';
describe('Tela de Pedidos', () => {
  xtest('Verifica se a tela de pedidos possui o elemento com numero do pedido ', () => {
    renderWithRouter(<App />, [CHECKOUT_ROUTER]);
    const idOrder = screen
      .getByTestId('customer_orders__element-order-id-<id>');
    expect(idOrder).toBeInTheDocument();
  });
  xtest('Verifica se a tela de pedidos possui o elemento com status do pedido ', () => {
    renderWithRouter(<App />, [CHECKOUT_ROUTER]);
    const statusOrder = screen
      .getByTestId('customer_orders__element-delivery-status-<id>');
    expect(statusOrder).toBeInTheDocument();
  });
  xtest('Verifica se a tela de pedidos possui o elemento com data do pedido ', () => {
    renderWithRouter(<App />, [CHECKOUT_ROUTER]);
    const dataOrder = screen
      .getByTestId('customer_orders__element-order-date-<id>');
    expect(dataOrder).toBeInTheDocument();
  });
  xtest('Verifica se a tela de pedidos possui o elemento com total do pedido ', () => {
    renderWithRouter(<App />, [CHECKOUT_ROUTER]);
    const totalOrder = screen
      .getByTestId('customer_orders__element-card-price-<id>');
    expect(totalOrder).toBeInTheDocument();
  });
});
