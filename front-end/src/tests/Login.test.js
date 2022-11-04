import React from 'react';
import { screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import App from '../App';
import renderWithRouter from './helpers/RenderWithRouter';

describe('Tela de Login', () => {
  test('Verifica se a tela de Login possui o input de "Email" ', () => {
    renderWithRouter(<App />, ['/login']);
    const idEmail = screen.getByTestId('common_login__input-email');
    expect(idEmail).toBeInTheDocument();
  });
  test('Verifica se tela de Login possui o input de "Senha" ', () => {
    renderWithRouter(<App />, ['/login']);
    const idSenha = screen.getByTestId('common_login__input-password');
    expect(idSenha).toBeInTheDocument();
  });
  test('Verifica se a tela de Login possui o botão "Login" ', () => {
    renderWithRouter(<App />, ['/login']);
    const idButtonLogin = screen.getByTestId('common_login__button-login');
    expect(idButtonLogin).toBeInTheDocument();
  });
  test('Verifica se tela de Login possui o botão para "Registrar nova conta"', () => {
    renderWithRouter(<App />, ['/login']);
    const idButtonRegister = screen.getByTestId('common_login__button-register');
    expect(idButtonRegister).toBeInTheDocument();
  });
  test('Ao tentar fazer login com usario invalido,'
  + 'retorna: "Usuário não encontrado"', async () => {
    renderWithRouter(<App />, ['/login']);
    const inputEmailEl = screen.getByTestId('common_login__input-email');
    userEvent.type(inputEmailEl, 'test@test.com');
    const inputPasswordEl = screen.getByTestId('common_login__input-password');
    userEvent.type(inputPasswordEl, '123456');
    const buttonLogin = screen.getByRole('button', { name: /login/i });
    userEvent.click(buttonLogin);
    const elOculto = await screen.findByTestId('common_login__element-invalid-email');
    expect(elOculto).toBeInTheDocument();
  });
});
