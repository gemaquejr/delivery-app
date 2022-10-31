import React from 'react';
import { screen } from '@testing-library/react';
import App from '../App';
import renderWithRouter from './helpers/RenderWithRouter';

const CHECKOUT_ROUTER = '/customer/checkout';
describe('Tela de Checkout', () => {
  xtest('Verifica se a tela de Checkout possui o elemento com numero do item ', () => {
    renderWithRouter(<App />, [CHECKOUT_ROUTER]);
    const idNumberItem = screen
      .getByTestId('customer_checkout__element-order-table-item-number-<index>');
    expect(idNumberItem).toBeInTheDocument();
  });
  xtest('Verifica se a tela de Checkout possui o elemento com descricao do item ', () => {
    renderWithRouter(<App />, [CHECKOUT_ROUTER]);
    const idDescItem = screen
      .getByTestId('customer_checkout__element-order-table-name-<index>');
    expect(idDescItem).toBeInTheDocument();
  });
  xtest('Verifica se Checkout possui o elemento com a quantidade do item ', () => {
    renderWithRouter(<App />, [CHECKOUT_ROUTER]);
    const qtdeItem = screen
      .getByTestId('customer_checkout__element-order-table-quantity-<index>');
    expect(qtdeItem).toBeInTheDocument();
  });
  xtest('Verifica se Checkout possui o elemento com o valor unitario do item ', () => {
    renderWithRouter(<App />, [CHECKOUT_ROUTER]);
    const valorItem = screen
      .getByTestId('customer_checkout__element-order-table-unit-price-<index>');
    expect(valorItem).toBeInTheDocument();
  });
});
