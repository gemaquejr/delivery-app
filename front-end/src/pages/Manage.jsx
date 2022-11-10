import React from 'react';
import Header from '../components/Header';
import NewUserForm from '../components/NewUserForm';
import logoImage from '../images/logoEBirita.png';
import './Manage.css';

function Manage() {
  return (
    <div>
      <Header />
      <div className="div-logo">
        <img className="imgLogo" src={ logoImage } alt="logo ebirita" />
      </div>
      <p data-testid="admin_manage__element-invalid-register" />
      <div>
        <h2 className="cadastrar-new">Cadastrar novo usuário</h2>
        <NewUserForm />
      </div>
      <div>
        <h2 className="cadastrar-new-user"> Lista de usuários</h2>
      </div>
    </div>
  );
}

export default Manage;
