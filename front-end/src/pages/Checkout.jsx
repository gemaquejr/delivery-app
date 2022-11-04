import React from 'react';
import Header from '../components/Header';
import TableProducts from '../components/TableProducts';

function Checkout() {
  return (
    <div>
      <Header />
      <h2>Finalizar pedido</h2>
      <TableProducts page="customer_checkout" />
    </div>
  );
}

export default Checkout;
