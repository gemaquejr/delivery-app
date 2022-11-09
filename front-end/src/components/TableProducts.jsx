import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import PropTypes from 'prop-types';
import { deleteOrder, setTotalValue } from '../redux/reducers/productSlice';
import Button from './Button';
import './TableProducts.css';

function TableProducts({ page }) {
  const dispatch = useDispatch();
  const price = useSelector((state) => state.productSlice.totalValue);

  const arrayOfOrders = useSelector(
    (state) => state.productSlice.orders,
  );

  useEffect(() => {
    let totalPrice = 0;
    arrayOfOrders.forEach((item) => {
      totalPrice += item.priceP * item.quantidadeP;
    });
    dispatch(setTotalValue(totalPrice.toFixed(2).toString().replace('.', ',')));
  }, [dispatch, arrayOfOrders]);

  const handleRemove = (id) => {
    dispatch(deleteOrder(id));
  };

  return (
    <div>
      <table id="table-product">
        <thead>
          <tr>
            <th>Item</th>
            <th>Descrição</th>
            <th>Qtde</th>
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
                  width="2"
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
                        classNameButton="button-remove"
                      />
                    </td>)}
              </tr>
            ))
          }
        </tbody>
      </table>
      <div className="div-total-pedido">
        <h2
          className="total-pedido"
          data-testid={ `${page}__element-order-total-price` }
        >
          { `Total R$ ${price}` }
        </h2>
      </div>
    </div>
  );
}

TableProducts.propTypes = {
  page: PropTypes.string.isRequired,
};

export default TableProducts;
