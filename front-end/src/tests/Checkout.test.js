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
  xtest('Verifica se Checkout possui o elemento com o subtotal ', () => {
    renderWithRouter(<App />, [CHECKOUT_ROUTER]);
    const valorSub = screen
      .getByTestId('customer_checkout__element-order-table-sub-total-<index>');
    expect(valorSub).toBeInTheDocument();
  });
  xtest('Verifica se Checkout possui o elemento "Remover" ', () => {
    renderWithRouter(<App />, [CHECKOUT_ROUTER]);
    const itemRemove = screen
      .getByTestId('customer_checkout__element-order-table-remove-<index>');
    expect(itemRemove).toBeInTheDocument();
  });
  xtest('Verifica se Checkout possui o elemento "Total" ', () => {
    renderWithRouter(<App />, [CHECKOUT_ROUTER]);
    const idTotal = screen
      .getByTestId('customer_checkout__element-order-total-price');
    expect(idTotal).toBeInTheDocument();
  });
  xtest('Verifica se Checkout possui o elemento de  "Select" para vendedor ', () => {
    renderWithRouter(<App />, [CHECKOUT_ROUTER]);
    const selectVendedor = screen
      .getByTestId('customer_checkout__select-seller');
    expect(selectVendedor).toBeInTheDocument();
  });
  xtest('Verifica se Checkout possui o input de  "Endereco"', () => {
    renderWithRouter(<App />, [CHECKOUT_ROUTER]);
    const inputAddress = screen
      .getByTestId('customer_checkout__input-address');
    expect(inputAddress).toBeInTheDocument();
  });
  xtest('Verifica se Checkout possui o input de  "Numero" no endereco', () => {
    renderWithRouter(<App />, [CHECKOUT_ROUTER]);
    const inputNumber = screen
      .getByTestId('customer_checkout__input-address-number');
    expect(inputNumber).toBeInTheDocument();
  });
  xtest('Verifica se Checkout possui o button de  "Finalizar Pedido"', () => {
    renderWithRouter(<App />, [CHECKOUT_ROUTER]);
    const buttonFinalizar = screen
      .getByTestId('customer_checkout__button-submit-order');
    expect(buttonFinalizar).toBeInTheDocument();
  });
});
