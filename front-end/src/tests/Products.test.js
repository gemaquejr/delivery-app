import React from 'react';
import { screen } from '@testing-library/react';
import App from '../App';
import renderWithRouter from './helpers/RenderWithRouter';

const PRODUCT_ROUTER = '/customer/products';
describe('Tela de Produtos', () => {
  test('Verifica se a tela de Produtos possui o link de "Produtos" ', () => {
    renderWithRouter(<App />, [PRODUCT_ROUTER]);
    const idLinkProdutos = screen
      .getByTestId('customer_products__element-navbar-link-products');
    expect(idLinkProdutos).toBeInTheDocument();
  });
  test('Verifica se a tela de Produtos possui o link de "Meus Pedidos" ', () => {
    renderWithRouter(<App />, [PRODUCT_ROUTER]);
    const idLinkPedidos = screen
      .getByTestId('customer_products__element-navbar-link-orders');
    expect(idLinkPedidos).toBeInTheDocument();
  });
  test('Verifica se a tela de Produtos possui o nav de UserName ', () => {
    renderWithRouter(<App />, [PRODUCT_ROUTER]);
    const idNavUser = screen
      .getByTestId('customer_products__element-navbar-link-orders');
    expect(idNavUser).toBeInTheDocument();
  });
  test('Verifica se a tela de Produtos possui o link de "Sair" ', () => {
    renderWithRouter(<App />, [PRODUCT_ROUTER]);
    const idLinkSair = screen
      .getByTestId('customer_products__element-navbar-link-logout');
    expect(idLinkSair).toBeInTheDocument();
  });
  test('Verifica se a tela de Produtos possui o nome do produto ', () => {
    renderWithRouter(<App />, [PRODUCT_ROUTER]);
    const idNameProduct = screen
      .getByTestId('customer_products__element-card-title-11');
    expect(idNameProduct).toBeInTheDocument();
  });
  xtest('Verifica se a tela de Produtos possui o preco do produto ', () => {
    renderWithRouter(<App />, [PRODUCT_ROUTER]);
    const idPrice = screen
      .getByTestId('customer_products__element-card-price-<id>');
    expect(idPrice).toBeInTheDocument();
  });
  xtest('Verifica se a tela de Produtos possui a imagem do produto ', () => {
    renderWithRouter(<App />, [PRODUCT_ROUTER]);
    const idImage = screen
      .getByTestId('customer_products__img-card-bg-image-<id>');
    expect(idImage).toBeInTheDocument();
  });
  xtest('Verifica se a tela de Produtos possui o botao de adicionar quantidade ', () => {
    renderWithRouter(<App />, [PRODUCT_ROUTER]);
    const idAddItem = screen
      .getByTestId('customer_products__button-card-add-item-<id>');
    expect(idAddItem).toBeInTheDocument();
  });
  xtest('Verifica se a tela de Produtos possui o botao de remover quantidade ', () => {
    renderWithRouter(<App />, [PRODUCT_ROUTER]);
    const idRmItem = screen
      .getByTestId('customer_products__button-card-rm-item-<id>');
    expect(idRmItem).toBeInTheDocument();
  });
  xtest('Verifica se a tela de Produtos possui o input de quantidade', () => {
    renderWithRouter(<App />, [PRODUCT_ROUTER]);
    const idInputQtd = screen
      .getByTestId('customer_products__input-card-quantity-<id>');
    expect(idInputQtd).toBeInTheDocument();
  });
  xtest('Verifica se a tela de Produtos possui o botao de "Checkout"', () => {
    renderWithRouter(<App />, [PRODUCT_ROUTER]);
    const idButtonCheck = screen
      .getByTestId('customer_products__checkout-bottom-value');
    expect(idButtonCheck).toBeInTheDocument();
  });
});
