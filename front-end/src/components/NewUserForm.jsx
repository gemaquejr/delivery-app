import React from 'react';
import Button from './Button';

function NewUserForm() {
  return (
    <form>
      <label htmlFor="Nome">
        Nome
        <input
          id="Nome"
          data-testid="admin_manage__input-name"
        />
      </label>
      <label htmlFor="Email">
        Email
        <input id="Email" data-testid="admin_manage__input-email" />
      </label>
      <label htmlFor="Senha">
        Senha
        <input id="Senha" type="password" data-testid="admin_manage__input-password" />
      </label>
      <label htmlFor="Tipo">
        Tipo
        <select id="Tipo" data-testid="admin_manage__select-role">
          <option>Cliente</option>
          <option>Vendedor</option>
        </select>
      </label>
      <Button
        type="button"
        name="cadastrar"
        onClick={ () => console.log('clicou cadastrar') }
        testId="admin_manage__button-register"
        buttonText="Cadastrar"
      />
    </form>
  );
}

export default NewUserForm;
