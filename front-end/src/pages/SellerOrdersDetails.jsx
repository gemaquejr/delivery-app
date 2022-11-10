import React, { useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';
import { useParams } from 'react-router-dom';
import TableProducts from '../components/TableProducts';
import { getOrderDetails, getUserById } from '../services/apiHelper';
import { orderDetails } from '../redux/reducers/productSlice';
import OrderDetailsHeader from '../components/OrderDetailsHeader';
import Header from '../components/Header';

function SellerOrdersDetails() {
  const { id } = useParams();
  const [orderInfo, setOrderInfo] = useState({ seller: { name: '' } });
  const dispatch = useDispatch();

  useEffect(() => {
    async function order() {
      const response = await getOrderDetails(id);

      const { products, sellerId } = response;

      const seller = await getUserById(sellerId);
      response.seller = seller;

      const magicNumber = 10;
      const date = response.saleDate.substring(0, magicNumber).split('-');
      const formattedDate = `${date[2]}/${date[1]}/${date[0]}`;
      response.saleDate = formattedDate;

      setOrderInfo(response);

      const productsList = [];
      products.forEach((product) => {
        const pd = {
          idP: product.id,
          nameP: product.name,
          quantidadeP: product.SalesProducts.quantity,
          priceP: product.price,
        };
        productsList.push(pd);
      });
      dispatch(orderDetails(productsList));
    }

    order();
  }, [dispatch, id]);

  return (
    <div>
      <Header />
      <h2 className="h2-details">
        Detalhes do Pedido
      </h2>
      <OrderDetailsHeader
        page="seller_order_details"
        orderId={ orderInfo.id }
        sellerName={ orderInfo.seller.name }
        saleDate={ orderInfo.saleDate }
        status={ orderInfo.status }
      />
      <TableProducts page="seller_order_details" />
    </div>
  );
}

export default SellerOrdersDetails;
