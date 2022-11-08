import React from 'react';
import Header from '../components/Header';
import NewUserForm from '../components/NewUserForm';

function Manage() {
  return (
    <div>
      <Header />
      <h2>Página de admin manage - requisito bônus- teste</h2>
      <p data-testid="admin_manage__element-invalid-register" />
      <div>
        Cadastrar novo usuário
        <NewUserForm />
      </div>
      <div>
        Lista de usuários
      </div>
    </div>
  );
}

export default Manage;
