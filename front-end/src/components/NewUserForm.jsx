import React from 'react';
import Button from './Button';
import './NewUserForm.css';

function NewUserForm() {
  return (
    <form>
      <label htmlFor="Nome">
        Nome
        <input
          id="Nome"
          data-testid="admin_manage__input-name"
          className="input-login"
        />
      </label>
      <label htmlFor="Email">
        Email
        <input
          id="Email"
          data-testid="admin_manage__input-email"
          className="input-login"
        />
      </label>
      <label htmlFor="Senha">
        Senha
        <input
          id="Senha"
          type="password"
          data-testid="admin_manage__input-password"
          className="input-senha-man"
        />
      </label>
      <div className="tipo-select">
        <label htmlFor="Tipo">
          Tipo
          <select id="Tipo" data-testid="admin_manage__select-role">
            <option>Cliente</option>
            <option>Vendedor</option>
          </select>
        </label>
      </div>
      <div className="div-button-cadastrar">
        <Button
          type="button"
          name="cadastrar"
          onClick={ () => console.log('clicou cadastrar') }
          testId="admin_manage__button-register"
          buttonText="Cadastrar"
          classNameButton="button-cadastrar"
        />
      </div>
    </form>
  );
}

export default NewUserForm;
