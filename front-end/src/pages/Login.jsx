import React, { useState } from 'react';
import { /* useSelector */ useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import FormInput from '../components/FormInput';
import Button from '../components/Button';
import { setLoggedUser } from '../redux/reducers/loginSlice';
import { login } from '../services/apiHelper';

function Login() {
  const EMAIL_REGEX = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  const MIN_PASSWORD_LENGTH = 6;
  const navigate = useNavigate();

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [disabled, setDisabled] = useState(true);
  const [errorMessage, setErrorMessage] = useState('');

  // const { password } = useSelector((state) => state.loginSlice);
  // teste login
  // fulana@deliveryapp.com - fulana@123
  // zebirita@email.com - $#zebirita#$

  const dispatch = useDispatch();

  const enableLoginButton = (userEmail, userPassword) => {
    const emailTest = EMAIL_REGEX.test(userEmail);

    if (emailTest && userPassword.length >= MIN_PASSWORD_LENGTH) {
      setDisabled(false);
    } else {
      setDisabled(true);
    }
  };

  const handleChange = ({ target }) => {
    if (target.name === 'email') {
      setEmail(target.value);
      enableLoginButton(target.value, password);
    }
    if (target.name === 'password') {
      setPassword(target.value);
      enableLoginButton(email, target.value);
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const response = await login({ email, password });

    const { userToken: token, message, name, role } = response;

    if (message) return setErrorMessage(message);
    dispatch(setLoggedUser({ email, token, name, role }));
    const data = JSON.stringify({ name, role, token, email });
    localStorage.setItem('user', data);
    switch (role) {
    case 'customer':
      navigate('/customer/products', { replace: true });
      break;
    case 'seller':
      navigate('/seller/orders', { replace: true });
      break;
    case 'administrator':
      navigate('/admin/manage', { replace: true });
      break;

    default:
      break;
    }
  };

  return (
    <div>
      <form onSubmit={ handleSubmit }>
        <FormInput
          label="login"
          type="email"
          name="email"
          value={ email }
          onChange={ handleChange }
          testId="common_login__input-email"
        />

        <FormInput
          label="password"
          type="password"
          name="password"
          value={ password }
          onChange={ handleChange }
          testId="common_login__input-password"
        />

        <Button
          buttonText="LOGIN"
          name="login"
          type="submit"
          disabled={ disabled }
          testId="common_login__button-login"
        />

        <Button
          buttonText="Ainda não tenho conta"
          name="register"
          type="button"
          testId="common_login__button-register"
          onClick={ () => navigate('/register', { replace: true }) }
        />
      </form>
      {errorMessage && (
        <p data-testid="common_login__element-invalid-email">
          {errorMessage}
        </p>
      )}
    </div>
  );
}

export default Login;
