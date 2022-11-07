import React, { useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';
import { useParams } from 'react-router-dom';
import TableProducts from '../components/TableProducts';
import { getOrderDetails, products } from '../services/apiHelper';
import { orderDetails } from '../redux/reducers/productSlice';
import OrderDetailsHeader from '../components/OrderDetailsHeader';

function CustomerOrdersDetails() {
  const { id } = useParams();
  const [orderInfo, setOrderInfo] = useState({});
  const dispatch = useDispatch();

  async function order(saleId) {
    const response = await getOrderDetails(saleId);
    const allProducts = await products();
    const { productsList } = response;
    console.log(response);
    setOrderInfo(response);
    const productsHere = [];
    productsList.forEach((product) => {
      const pdData = allProducts.find((item) => item.id === product.productId);
      const pd = {
        idP: product.productId,
        nameP: pdData.name,
        quantidadeP: product.quantity,
        priceP: pdData.price,
      };
      productsHere.push(pd);
    });
    dispatch(orderDetails(productsHere));
  }

  useEffect(() => {
    order(id);
  }, [id]);

  return (
    <div>
      <h2>
        Detalhe do Pedido
      </h2>
      <OrderDetailsHeader
        page="customer_order_details"
        orderId={ orderInfo.id }
        sellerId={ orderInfo.sellerId }
        saleDate={ orderInfo.saleDate }
        status={ orderInfo.status }
      />
      <TableProducts page="customer_order_details" />
    </div>
  );
}

export default CustomerOrdersDetails;
