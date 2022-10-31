import React, { useState } from 'react';
import { /* useSelector */ useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { setLoggedUser } from '../redux/reducers/loginSlice';
import FormInput from '../components/FormInput';
import Button from '../components/Button';
import { register } from '../services/loginAPI';

function Register() {
  const EMAIL_REGEX = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  const MIN_PASSWORD_LENGTH = 6;
  const MIN_NAME_LENGTH = 12;
  const navigate = useNavigate();

  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [disabled, setDisabled] = useState(true);
  const [errorMessage, setErrorMessage] = useState('');

  const dispatch = useDispatch();

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

  const handleSubmit = async (e) => {
    e.preventDefault();
    const response = await register({ name, email, password });

    const { token, message, name: dataName, role } = response;

    if (message) return setErrorMessage(message);
    dispatch(setLoggedUser({ email, token, name: dataName, role }));
    const data = JSON.stringify({ ...response, email });
    localStorage.setItem('userData', data);
    navigate('/customer/products', { replace: true });
  };

  return (
    <div>
      <form onSubmit={ handleSubmit }>
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
      {errorMessage && (
        <p data-testid="common_register__element-invalid_register">
          {errorMessage}
        </p>
      )}
    </div>
  );
}

export default Register;
