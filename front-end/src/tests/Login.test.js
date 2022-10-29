import React from 'react';
import { render, screen } from '@testing-library/react';
import { describe } from 'pm2';
import App from '../App';
import renderWithRouter from './helpers/RenderWithRouter';
import Login from '../pages/Login';

describe('Tela de Login', () => {
  test('Verifica se tela de Login é renderizada corretamente', () => {
    renderWithRouter(<App />);
  });
});

// describe('Tests Login', () => {
//   test('Verify if login is correctly render', () => {
//     const { history } = renderWithRouter(<App />);
//     history.push('/');
//     expect(2 + 2).toEqual(4);
//     // const inputs = screen.getAllByRole('textbox');
//     // expect(inputs.length).toBe(1);
//     // const idEmail = screen.getByTestId(EMAIL_INPUT);
//     // expect(idEmail).toBeInTheDocument();
//     // const idPassword = screen.getByTestId(PASSWORD_INPUT);
//     // expect(idPassword).toBeInTheDocument();
//   });
// });
