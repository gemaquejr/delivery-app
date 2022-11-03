import React from 'react';
import { screen } from '@testing-library/react';
import App from '../App';
import renderWithRouter from './helpers/RenderWithRouter';

const CUSTOMER_ORDER_DETAILS_ROUTER = '/customer/orders/<idVenda>';
describe('Tela de Detalhes do Pedidos', () => {
  xtest('Verifica se tela de detalhes do pedido possui "numero do pedido" ', () => {
    renderWithRouter(<App />, [CUSTOMER_ORDER_DETAILS_ROUTER]);
    const pedidoNumber = screen
      .getByTestId('customer_order_details__element-order-details-label-order-id');
    expect(pedidoNumber).toBeInTheDocument();
  });
  xtest('Verifica se tela de detalhes do pedido possui "nome do vendedor" ', () => {
    renderWithRouter(<App />, [CUSTOMER_ORDER_DETAILS_ROUTER]);
    const sellerName = screen
      .getByTestId('customer_order_details__element-order-details-label-seller-name');
    expect(sellerName).toBeInTheDocument();
  });
  xtest('Verifica se tela de detalhes do pedido possui "data do pedido" ', () => {
    renderWithRouter(<App />, [CUSTOMER_ORDER_DETAILS_ROUTER]);
    const dateOrder = screen
      .getByTestId('customer_order_details__element-order-details-label-order-date');
    expect(dateOrder).toBeInTheDocument();
  });
  xtest('Verifica se tela de detalhes do pedido possui "status do pedido" ', () => {
    renderWithRouter(<App />, [CUSTOMER_ORDER_DETAILS_ROUTER]);
    const statusOrder = screen
      .getByTestId('customer_order_details__element-order-details-label-'
      + 'delivery-status<index>');
    expect(statusOrder).toBeInTheDocument();
  });
  xtest('Verifica se tela de detalhes do pedido possui "numero do item" ', () => {
    renderWithRouter(<App />, [CUSTOMER_ORDER_DETAILS_ROUTER]);
    const numberItem = screen
      .getByTestId('customer_order_details__element-order-table-item-number-<index>');
    expect(numberItem).toBeInTheDocument();
  });
  xtest('Verifica se tela de detalhes do pedido possui "nome do item" ', () => {
    renderWithRouter(<App />, [CUSTOMER_ORDER_DETAILS_ROUTER]);
    const nameItem = screen
      .getByTestId('customer_order_details__element-order-table-name-<index>');
    expect(nameItem).toBeInTheDocument();
  });
  xtest('Verifica se tela de detalhes do pedido possui "quantidade do item" ', () => {
    renderWithRouter(<App />, [CUSTOMER_ORDER_DETAILS_ROUTER]);
    const qtdeItem = screen
      .getByTestId('customer_order_details__element-order-table-quantity-<index>');
    expect(qtdeItem).toBeInTheDocument();
  });
  xtest('Verifica se tela de detalhes do pedido possui "valor unit do item" ', () => {
    renderWithRouter(<App />, [CUSTOMER_ORDER_DETAILS_ROUTER]);
    const priceItem = screen
      .getByTestId('customer_order_details__element-order-table-unit-price-<index>');
    expect(priceItem).toBeInTheDocument();
  });
  xtest('Verifica se tela de detalhes do pedido possui "subtotal do item" ', () => {
    renderWithRouter(<App />, [CUSTOMER_ORDER_DETAILS_ROUTER]);
    const subTotalItem = screen
      .getByTestId('customer_order_details__element-order-table-sub-total-<index>');
    expect(subTotalItem).toBeInTheDocument();
  });
  xtest('Verifica se tela de detalhes do pedido possui "total do pedido" ', () => {
    renderWithRouter(<App />, [CUSTOMER_ORDER_DETAILS_ROUTER]);
    const totalPedido = screen
      .getByTestId('customer_order_details__element-order-total-price');
    expect(totalPedido).toBeInTheDocument();
  });
  xtest('Verifica se tela de detalhes do pedido possui'
  + 'button "marcar como entregue" ', () => {
    renderWithRouter(<App />, [CUSTOMER_ORDER_DETAILS_ROUTER]);
    const buttonEntregue = screen
      .getByTestId('customer_order_details__button-delivery-check');
    expect(buttonEntregue).toBeInTheDocument();
  });
});
