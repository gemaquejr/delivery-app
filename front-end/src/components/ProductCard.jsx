import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import PropTypes from 'prop-types';
import { addOrders, increment, decrement } from '../redux/reducers/productSlice';
import FormInput from './FormInput';
import Button from './Button';

function ProductCard({ id, name, price, urlImage }) {
  const INDEX_OF_FALSE_RETURN = -1;
  const dispatch = useDispatch();
  const { orders } = useSelector((state) => state.productSlice);
  console.log(orders);

  // const [productQnt, setProductQnt] = useState(0);
  // const [productArray, setProductArray] = useState([]);
  const [productName, setProductName] = useState({
    idP: id,
    nameP: name,
    priceP: price,
    quantidadeP: 0 });

  const handleChange = ({ target }) => {
    setProductName({ ...productName, quantidadeP: Number.parseInt(target.value, 10) });
    if (target.value < 0) {
      setProductName({ ...productName, quantidadeP: 0 });
    }
  };

  const handleDecrement = () => {
    if (productName.quantidadeP <= 0) {
      return setProductName({ ...productName, quantidadeP: 0 });
    }

    setProductName({ ...productName, quantidadeP: productName.quantidadeP - 1 });

    const productFind = orders.find((item) => item.nameP === name);
    const productIndex = orders.indexOf(productFind);
    if (productIndex === INDEX_OF_FALSE_RETURN) {
      dispatch(addOrders({ ...productName, quantidadeP: productName.quantidadeP - 1 }));
    } else {
      dispatch(decrement(orders[productIndex]));
    }
  };

  const handleIncrement = () => {
    setProductName({ ...productName, quantidadeP: productName.quantidadeP + 1 });
    const productFind = orders.find((item) => item.nameP === name);
    const productIndex = orders.indexOf(productFind);
    if (productIndex === INDEX_OF_FALSE_RETURN) {
      // productArray.push(productName);
      dispatch(addOrders({ ...productName, quantidadeP: productName.quantidadeP + 1 }));
    } else {
      // productArray[productIndex] = productName;
      dispatch(increment(orders[productIndex]));
    }
  };

  return (
    <div className="product-card">
      <p data-testid={ `customer_products__element-card-price-${id}` }>
        { price }
      </p>
      <img
        data-testid={ `customer_products__img-card-bg-image-${id}` }
        src={ urlImage }
        alt={ name }
      />
      <h3 data-testid={ `customer_products__element-card-title-${id}` }>
        { name }
      </h3>
      <Button
        buttonText="-"
        name="rm-item"
        type="button"
        testId={ `customer_products__button-card-rm-item-${id}` }
        onClick={ handleDecrement }
      />
      <FormInput
        type="number"
        name={ id }
        label=""
        testId={ `customer_products__input-card-quantity-${id}` }
        value={ productName.quantidadeP }
        onChange={ handleChange }
      />
      <Button
        buttonText="+"
        name="add-item"
        type="button"
        onClick={ handleIncrement }
        testId={ `customer_products__button-card-add-item-${id}` }
      />
    </div>
  );
}

ProductCard.propTypes = {
  id: PropTypes.number.isRequired,
  name: PropTypes.string.isRequired,
  price: PropTypes.string.isRequired,
  urlImage: PropTypes.string.isRequired,
};

export default ProductCard;
