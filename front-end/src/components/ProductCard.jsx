import React, { useState } from 'react';
import PropTypes from 'prop-types';
import FormInput from './FormInput';
import Button from './Button';

function ProductCard({ id, name, price, urlImage }) {
  const [productQnt, setProductQnt] = useState(0);
  const [productArray, setProductArray] = useState([]);
  const [productName, setProductName] = useState({
    idP: id,
    nameP: name,
    priceP: price,
    quantidadeP: 0 });

  const handleChange = ({ target }) => {
    setProductQnt(target.value);
    if (target.value < 0) {
      setProductQnt(0);
    }
  };

  const handleDecrement = () => {
    setProductName({ ...productName, quantidadeP: productName.quantidadeP - 1 });
    const productFind = productArray.find((item) => item.nameP === name);
    const productIndex = productArray.indexOf(productFind);
    if (productIndex === -1) {
      productArray.push(productName);
    } else {
      productArray[productIndex] = productName;
    }
  };

  const handleIncrement = () => {
    setProductName({ ...productName, quantidadeP: productName.quantidadeP + 1 });
    const productFind = productArray.find((item) => item.nameP === name);
    const productIndex = productArray.indexOf(productFind);
    if (productIndex === -1) {
      productArray.push(productName);
    } else {
      productArray[productIndex] = productName;
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
