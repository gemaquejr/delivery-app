import React, { useState } from 'react';
import { /* useSelector */ useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import FormInput from '../components/FormInput';
import Button from '../components/Button';
import { setLoggedUser } from '../redux/reducers/loginSlice';

function Login() {
  const EMAIL_REGEX = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  const MIN_PASSWORD_LENGTH = 6;
  const navigate = useNavigate();

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [disabled, setDisabled] = useState(true);

  // const { password } = useSelector((state) => state.loginSlice);

  const dispatch = useDispatch();

  const enableLoginButton = (userEmail, userPassword) => {
    const emailTest = EMAIL_REGEX.test(userEmail);

    if (emailTest && userPassword.length > MIN_PASSWORD_LENGTH) {
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

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(setLoggedUser({ email, token: 1234 }));
    setEmail('');
    setPassword('');
    setDisabled(true);
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
    </div>
  );
}

export default Login;
