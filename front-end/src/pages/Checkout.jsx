import React from 'react';
import Button from '../components/Button';
import Header from '../components/Header';
import TableOrder from '../components/TableOrder';
import TableProducts from '../components/TableProducts';

function Checkout() {
  return (
    <div>
      <Header />
      <h2>Finalizar pedido</h2>
      <TableProducts page="customer_checkout" />
      <h2>Detalhes e endereço de entrega</h2>
      <div>
        <TableOrder />
        <Button
          type="button"
          name="Finalizar pedido"
          onClick={ () => console.log('clicou finalizar pedido') }
          testId="customer_checkout__button-submit-order"
          buttonText="Finalizar pedido"
        />
      </div>
    </div>
  );
}

export default Checkout;
