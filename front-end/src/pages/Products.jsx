import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import ProductCard from '../components/ProductCard';
import { products } from '../services/apiHelper';
import { setProducts } from '../redux/reducers/productSlice';
import Header from '../components/Header';
import Button from '../components/Button';

function Products() {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const arrayOfProducts = useSelector((state) => state.productSlice.products);
  const { orders } = useSelector((state) => state.productSlice);

  const handlePrice = () => {
    let totalPrice = 0;
    if (orders.length > 0) {
      orders.forEach((product) => {
        totalPrice += product.quantidadeP * parseFloat(product.priceP);
      });
    }
    const stringPrice = totalPrice.toFixed(2).toString();
    const priceInBRL = stringPrice.replace('.', ',');
    return priceInBRL;
  };

  useEffect(() => {
    const allProducts = async () => {
      const data = await products();
      dispatch(setProducts(data));
    };

    allProducts();
  }, [dispatch]);

  return (
    <div>
      <div>
        <Header />
      </div>
      <div className="card-container">
        {
          arrayOfProducts.map((item) => (
            <ProductCard
              key={ item.id }
              id={ item.id }
              name={ item.name }
              price={ item.price }
              urlImage={ item.urlImage }
            />
          ))
        }
      </div>

      <div className="valor-total" data-testid="customer_products__checkout-bottom-value">
        <Button
          type="button"
          name="Carrinho"
          onClick={ () => navigate('/customer/checkout', { replace: true }) }
          testId="customer_products__button-cart"
          buttonText={ `VALOR TOTAL: R$ ${handlePrice()}` }
          disabled={ parseInt(handlePrice(), 10) === 0 }
        />
      </div>
    </div>
  );
}

export default Products;
