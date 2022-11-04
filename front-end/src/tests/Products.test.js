import React from 'react';
import { screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import App from '../App';
import renderWithRouter from './helpers/RenderWithRouter';

const PRODUCT_ROUTER = '/customer/products';
const EMAIL = 'zebirita@email.com';
const INPUT_EMAIL = 'common_login__input-email';
const PASSWORD = '$#zebirita#$';
const INPUT_PASSWORD = 'common_login__input-password';
describe('Tela de Produtos', () => {
  test('Verifica se a tela de Produtos possui o link de "Produtos" ', async () => {
    renderWithRouter(<App />, ['/login']);
    const inputEmailEl = screen.getByTestId(INPUT_EMAIL);
    userEvent.type(inputEmailEl, EMAIL);
    const inputPasswordEl = screen.getByTestId(INPUT_PASSWORD);
    userEvent.type(inputPasswordEl, PASSWORD);
    const buttonLogin = screen.getByRole('button', { name: /login/i });
    userEvent.click(buttonLogin);
    const idLinkProdutos = await screen
      .findByTestId('customer_products__element-navbar-link-products');
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
  test('Verifica se a tela de Produtos possui o nome do produto ', async () => {
    renderWithRouter(<App />, ['/login']);
    const inputEmailEl = screen.getByTestId(INPUT_EMAIL);
    userEvent.type(inputEmailEl, EMAIL);
    const inputPasswordEl = screen.getByTestId(INPUT_PASSWORD);
    userEvent.type(inputPasswordEl, PASSWORD);
    const buttonLogin = screen.getByRole('button', { name: /login/i });
    userEvent.click(buttonLogin);
    const idNameProduct = await screen
      .findByTestId('customer_products__element-card-title-1');
    expect(idNameProduct).toBeInTheDocument();
  });
  test('Verifica se a tela de Produtos possui o preco do produto ', async () => {
    renderWithRouter(<App />, ['/login']);
    const inputEmailEl = screen.getByTestId(INPUT_EMAIL);
    userEvent.type(inputEmailEl, EMAIL);
    const inputPasswordEl = screen.getByTestId(INPUT_PASSWORD);
    userEvent.type(inputPasswordEl, PASSWORD);
    const buttonLogin = screen.getByRole('button', { name: /login/i });
    userEvent.click(buttonLogin);
    const idPrice = await screen
      .findByTestId('customer_products__element-card-price-1');
    expect(idPrice).toBeInTheDocument();
  });
  test('Verifica se a tela de Produtos possui a imagem do produto ', async () => {
    renderWithRouter(<App />, ['/login']);
    const inputEmailEl = screen.getByTestId(INPUT_EMAIL);
    userEvent.type(inputEmailEl, EMAIL);
    const inputPasswordEl = screen.getByTestId(INPUT_PASSWORD);
    userEvent.type(inputPasswordEl, PASSWORD);
    const buttonLogin = screen.getByRole('button', { name: /login/i });
    userEvent.click(buttonLogin);
    const idImage = await screen
      .findByTestId('customer_products__img-card-bg-image-1');
    expect(idImage).toBeInTheDocument();
  });
  test('Verifica se a tela de Produtos possui o botao de adicionar'
    + ' quantidade', async () => {
    renderWithRouter(<App />, ['/login']);
    const inputEmailEl = screen.getByTestId(INPUT_EMAIL);
    userEvent.type(inputEmailEl, EMAIL);
    const inputPasswordEl = screen.getByTestId(INPUT_PASSWORD);
    userEvent.type(inputPasswordEl, PASSWORD);
    const buttonLogin = screen.getByRole('button', { name: /login/i });
    userEvent.click(buttonLogin);
    const idAddItem = await screen
      .findByTestId('customer_products__button-card-add-item-1');
    expect(idAddItem).toBeInTheDocument();
  });
  test('Verifica se a tela de Produtos possui o botao'
  + ' de remover quantidade ', async () => {
    renderWithRouter(<App />, ['/login']);
    const inputEmailEl = screen.getByTestId(INPUT_EMAIL);
    userEvent.type(inputEmailEl, EMAIL);
    const inputPasswordEl = screen.getByTestId(INPUT_PASSWORD);
    userEvent.type(inputPasswordEl, PASSWORD);
    const buttonLogin = screen.getByRole('button', { name: /login/i });
    userEvent.click(buttonLogin);
    const idRmItem = await screen
      .findByTestId('customer_products__button-card-rm-item-1');
    expect(idRmItem).toBeInTheDocument();
  });
  test('Verifica se a tela de Produtos possui o input de quantidade', async () => {
    renderWithRouter(<App />, ['/login']);
    const inputEmailEl = screen.getByTestId(INPUT_EMAIL);
    userEvent.type(inputEmailEl, EMAIL);
    const inputPasswordEl = screen.getByTestId(INPUT_PASSWORD);
    userEvent.type(inputPasswordEl, PASSWORD);
    const buttonLogin = screen.getByRole('button', { name: /login/i });
    userEvent.click(buttonLogin);
    const idInputQtd = await screen
      .findByTestId('customer_products__input-card-quantity-1');
    expect(idInputQtd).toBeInTheDocument();
  });
  test('Verifica se a tela de Produtos possui o botao de "Checkout"', async () => {
    renderWithRouter(<App />, ['/login']);
    const inputEmailEl = screen.getByTestId(INPUT_EMAIL);
    userEvent.type(inputEmailEl, EMAIL);
    const inputPasswordEl = screen.getByTestId(INPUT_PASSWORD);
    userEvent.type(inputPasswordEl, PASSWORD);
    const buttonLogin = screen.getByRole('button', { name: /login/i });
    userEvent.click(buttonLogin);
    const idButtonCheck = await screen
      .findByTestId('customer_products__checkout-bottom-value');
    expect(idButtonCheck).toBeInTheDocument();
  });
});
