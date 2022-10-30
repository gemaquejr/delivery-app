import React from 'react';
import { screen } from '@testing-library/react';
import App from '../App';
import renderWithRouter from './helpers/RenderWithRouter';

describe('Tela de Cadastro', () => {
  test('Verifica se a tela de Cadastro possui o input de "Nome" ', () => {
    renderWithRouter(<App />, ['/register']);
    const idNome = screen.getByTestId('common_login__input-email');
    expect(idNome).toBeInTheDocument();
  });
  test('Verifica se a tela de Cadastro possui o input de "Email" ', () => {
    renderWithRouter(<App />, ['/register']);
    const idEmail = screen.getByTestId('common_register__input-email');
    expect(idEmail).toBeInTheDocument();
  });
  test('Verifica se a tela de Cadastro possui o input de "Senha" ', () => {
    renderWithRouter(<App />, ['/register']);
    const idSenha = screen.getByTestId('common_register__input-password');
    expect(idSenha).toBeInTheDocument();
  });
  test('Verifica se a tela de Cadastro possui o botão de "Cadastrar" ', () => {
    renderWithRouter(<App />, ['/register']);
    const buttonCadastrar = screen.getByTestId('common_register__button-register');
    expect(buttonCadastrar).toBeInTheDocument();
  });
  test(
    'Verifica se a tela de Cadastro possui o "elemento oculto mensagem de erro"',
    () => {
      renderWithRouter(<App />, ['/register']);
      const idElementOculto = screen
        .getByTestId('common_register__element-invalid_register');
      expect(idElementOculto).toBeInTheDocument();
    },
  );
});
