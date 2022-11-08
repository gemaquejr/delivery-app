import React, { useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import PropTypes from 'prop-types';
import { deleteOrder, setTotalValue } from '../redux/reducers/productSlice';
import Button from './Button';

function TableProducts({ page }) {
  const dispatch = useDispatch();
  const [it, setIt] = useState(1);
  const [price, setPrice] = useState();

  const arrayOfOrders = useSelector(
    (state) => state.productSlice.orders,
  );

  useEffect(() => {
    let totalPrice = 0;
    let iterations = 0;
    if (arrayOfOrders) {
      arrayOfOrders.forEach((item) => {
        totalPrice += item.priceP * item.quantidadeP;
        iterations += 1;
      });
    }
    console.log(iterations);
    console.log(arrayOfOrders.length);
    setPrice(totalPrice);
    setIt(iterations);
  }, [arrayOfOrders]);

  useEffect(() => {
    if (it === arrayOfOrders.length) {
      dispatch(setTotalValue(price.toFixed(2).toString().replace('.', ',')));
    }
  }, [dispatch, it, arrayOfOrders, price]);

  const handleRemove = (id) => {
    dispatch(deleteOrder(id));
  };

  return (
    <div>
      <table>
        <thead>
          <tr>
            <th>Item</th>
            <th>Descrição</th>
            <th>Quantidade</th>
            <th>Valor Unitário</th>
            <th>Sub-Total</th>
            {page === 'customer_checkout' && (<th>Remover</th>)}
          </tr>
        </thead>
        <tbody>
          {
            arrayOfOrders.map((item, index) => (
              <tr key={ item.idP }>
                <td
                  data-testid={
                    `${page}__element-order-table-item-number-${index}`
                  }
                >
                  {index + 1}
                </td>
                <td
                  data-testid={
                    `${page}__element-order-table-name-${index}`
                  }
                >
                  {item.nameP}
                </td>
                <td
                  data-testid={
                    `${page}__element-order-table-quantity-${index}`
                  }
                >
                  {item.quantidadeP}
                </td>
                <td
                  data-testid={
                    `${page}__element-order-table-unit-price-${index}`
                  }
                >
                  {
                    (item.priceP).replace('.', ',')
                  }
                </td>
                <td
                  data-testid={
                    `${page}__element-order-table-sub-total-${index}`
                  }
                >
                  {(item.priceP * item.quantidadeP).toFixed(2)
                    .toString().replace('.', ',')}
                </td>
                {page === 'customer_checkout'
                  && (
                    <td>
                      <Button
                        buttonText="Remover"
                        type="button"
                        name="Remover"
                        onClick={ () => handleRemove(item.idP) }
                        testId={ `${page}__element-order-table-remove-${index}` }
                      />
                    </td>)}
              </tr>
            ))
          }
        </tbody>
      </table>
      <div>
        {(it === arrayOfOrders.length && it !== 0) && (
          <h2
            data-testid={ `${page}__element-order-total-price` }
          >
            { `Total R$${price.toFixed(2).toString().replace('.', ',')}` }
          </h2>
        )}
      </div>
    </div>
  );
}

TableProducts.propTypes = {
  page: PropTypes.string.isRequired,
};

export default TableProducts;
