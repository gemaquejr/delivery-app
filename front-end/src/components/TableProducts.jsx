import React from 'react';
import { useSelector } from 'react-redux';
import PropTypes from 'prop-types';
import Button from './Button';

function TableProducts({ page }) {
  const arrayOfOrders = useSelector(
    (state) => state.productSlice.orders,
  );
  // arrayOfOrders{{idP(pin):10
  // nameP:"Skol Beats Senses 269ml"
  // priceP:"3.57"
  // quantidadeP:2}}

  let totalPrice = 0;
  arrayOfOrders.forEach((item) => {
    totalPrice += item.priceP * item.quantidadeP;
  });

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
                        onClick={ () => console.log('clicou REMOVER') }
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
