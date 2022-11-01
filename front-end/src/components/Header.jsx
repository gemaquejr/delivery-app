import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Link, useNavigate } from 'react-router-dom';
import { setLoggedUser } from '../redux/reducers/loginSlice';
import Button from './Button';

function Header() {
  const { name, role } = useSelector((state) => state.loginSlice.loggedUser);
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const handleLogout = () => {
    dispatch(setLoggedUser({
      email: '',
      token: '',
      name: '',
      role: '',
    }));
    localStorage.clear();

    navigate('/login', { replace: true });
  };

  return (
    <div>
      <div className="header-container">
        <div>
          { role === 'customer'
          && (
            <Link
              to="/customer/products"
              data-testid="customer_products__element-navbar-link-products"
            >
              <h2>
                Produtos
              </h2>
            </Link>
          )}
        </div>

        <div>
          { role === 'customer'
            ? (
              <Link
                to="/customer/orders"
                data-testid="customer_products__element-navbar-link-orders"
              >
                <h2>
                  Meus Pedidos
                </h2>
              </Link>)
            : (
              <Link
                to="/seller/orders"
                data-testid="customer_products__element-navbar-link-orders"
              >
                <h2>
                  Pedidos
                </h2>
              </Link>)}
        </div>

        <div>
          <h2
            data-testid="customer_products__element-navbar-user-full-name"
          >
            { name }
          </h2>
        </div>

        <div>
          <Button
            buttonText="Sair"
            name="logout"
            type="button"
            testId="customer_products__element-navbar-link-logout"
            onClick={ handleLogout }
          />
        </div>
      </div>
    </div>
  );
}

export default Header;
