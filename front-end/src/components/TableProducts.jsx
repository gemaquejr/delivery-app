import React from 'react';
import { useSelector } from 'react-redux';
import Button from './Button';

function TableProducts() {
  const arrayOfOrders = useSelector(
    (state) => state.productSlice.orders,
  );
  // arrayOfOrders{{idP(pin):10
  // nameP:"Skol Beats Senses 269ml"
  // priceP:"3.57"
  // quantidadeP:2}}

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
                <td>{index + 1}</td>
                <td>{item.nameP}</td>
                <td>{item.quantidadeP}</td>
                <td>{item.priceP}</td>
                <td>{item.priceP * item.quantidadeP}</td>
                <td>
                  <Button
                    buttonText="Remover"
                    type="button"
                    name="Remover"
                    onClick={ () => console.log('clicou') }
                    testid={ `customer_checkout__element-order-table-remove-${index}` }
                  />
                </td>
              </tr>
            ))
          }
        </tbody>
      </table>
    </div>
  );
}

export default TableProducts;
