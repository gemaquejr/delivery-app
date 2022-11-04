import React from 'react';
import Header from '../components/Header';
import OrderCard from '../components/OrderCard';

function SellerOrders() {
  const mockOrder = [{
    id: 1,
    status: 'pendente',
    data: '4/11/2022',
    valorTotal: 100,
    address: 'rua dos bobos, nº 0',
  },
  {
    id: 2,
    status: 'ok',
    data: '4/11/2022',
    valorTotal: 90,
    address: 'rua do bill, nº 2',
  },
  ];

  return (
    <div>
      <Header />
      <div className="order-container">
        {
          mockOrder.map((item) => (
            <OrderCard
              key={ item.id }
              orderId={ item.id }
              orderStatus={ item.status }
              orderTotalValue={ item.valorTotal }
              orderAddress={ item.address }
            />
          ))
        }
      </div>
    </div>
  );
}

export default SellerOrders;
