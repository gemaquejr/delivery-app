import React, { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import { getAllSales } from '../services/apiHelper';
import Header from '../components/Header';
import OrderCard from '../components/OrderCard';
import './SellerOrders.css';

function SellerOrders() {
  const { role, id } = useSelector((state) => state.loginSlice.loggedUser);
  const [arrayOfSales, setArrayOfSales] = useState([]);

  useEffect(() => {
    const allSales = async () => {
      const data = await getAllSales();

      setArrayOfSales(data.filter((item) => item.sellerId === id));
    };

    allSales();
  }, [id]);

  return (
    <div>
      <Header />
      <div className="order-container-seller">
        {
          arrayOfSales.map((item) => (
            <OrderCard
              key={ item.id }
              orderId={ item.id }
              orderStatus={ item.status }
              orderTotalValue={ item.totalPrice }
              orderAddress={ `${item.deliveryAddress}, ${item.deliveryNumber}` }
              orderDate={ new Date(item.saleDate).toLocaleDateString('pt-BR') }
              orderRole={ role }
            />
          ))
        }
      </div>
    </div>
  );
}

export default SellerOrders;
