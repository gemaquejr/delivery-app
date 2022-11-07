import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import PropTypes from 'prop-types';
import { deleteOrder, setTotalValue } from '../redux/reducers/productSlice';
import Button from './Button';

function TableProducts({ page }) {
  const dispatch = useDispatch();

  const arrayOfOrders = useSelector(
    (state) => state.productSlice.orders,
  );

  let totalPrice = 0;
  arrayOfOrders.forEach((item) => {
    totalPrice += item.priceP * item.quantidadeP;
  });

  useEffect(() => {
    dispatch(setTotalValue(totalPrice.toFixed(2).toString().replace('.', ',')));
  }, [dispatch, totalPrice]);

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
            <th>Remover</th>
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
                  {(item.priceP).replace('.', ',')}
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
      <h2
        data-testid={ `${page}__element-order-total-price` }
      >
        { `Total R$${totalPrice.toFixed(2).toString().replace('.', ',')}` }
      </h2>
    </div>
  );
}

TableProducts.propTypes = {
  page: PropTypes.string.isRequired,
};

export default TableProducts;
