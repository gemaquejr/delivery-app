import React, { useState } from 'react';
import FormInput from '../components/FormInput';
import Button from '../components/Button';

function Register() {
  const EMAIL_REGEX = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  const MIN_PASSWORD_LENGTH = 6;
  const MIN_NAME_LENGTH = 12;

  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [disabled, setDisabled] = useState(true);

  const enableLoginButton = (userName, userEmail, userPassword) => {
    const emailTest = EMAIL_REGEX.test(userEmail);

    if (emailTest
      && userPassword.length >= MIN_PASSWORD_LENGTH
      && userName.length >= MIN_NAME_LENGTH) {
      setDisabled(false);
    } else {
      setDisabled(true);
    }
  };

  const handleChange = ({ target }) => {
    if (target.name === 'name') {
      setName(target.value);
      enableLoginButton(target.value, email, password);
    }
    if (target.name === 'email') {
      setEmail(target.value);
      enableLoginButton(name, target.value, password);
    }
    if (target.name === 'password') {
      setPassword(target.value);
      enableLoginButton(name, email, target.value);
    }
  };

  return (
    <div>
      <form>
        <FormInput
          label="name"
          type="text"
          name="name"
          value={ name }
          onChange={ handleChange }
          testId="common_register__input-name"
        />

        <FormInput
          label="email"
          type="email"
          name="email"
          value={ email }
          onChange={ handleChange }
          testId="common_register__input-email"
        />

        <FormInput
          label="password"
          type="password"
          name="password"
          value={ password }
          onChange={ handleChange }
          testId="common_register__input-password"
        />

        <Button
          buttonText="CADASTRAR"
          name="cadastrar"
          type="submit"
          disabled={ disabled }
          testId="common_register__button-register"
        />
      </form>
    </div>
  );
}

export default Register;
