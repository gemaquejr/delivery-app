import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { newSale } from '../services/apiHelper';
import { setSales, resetOrders } from '../redux/reducers/productSlice';
import Button from '../components/Button';
import Header from '../components/Header';
import TableOrder from '../components/TableOrder';
import TableProducts from '../components/TableProducts';

function Checkout() {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const { id, token } = useSelector((state) => state.loginSlice.loggedUser);
  const totalValue = useSelector((state) => state.productSlice.totalValue);
  const arrayOfOrders = useSelector(
    (state) => state.productSlice.orders,
  );
  const { address, addressNumber } = useSelector((state) => state.userSlice);

  const productsList = arrayOfOrders.map((item) => ({
    productId: item.idP,
    quantity: item.quantidadeP,
  }));

  const saleInfo = {
    userId: id,
    sellerId: null,
    totalPrice: null,
    deliveryAddress: address,
    deliveryNumber: addressNumber,
    productsList,
  };

  const handleCheckout = async () => {
    saleInfo.sellerId = parseInt(document.getElementById('seller-select').value, 10);
    const totalPrice = parseFloat(totalValue.replace(',', '.'));
    saleInfo.totalPrice = totalPrice;
    const { saleId } = await newSale(saleInfo, token);

    dispatch(setSales(saleId));
    dispatch(resetOrders());

    if (saleId) navigate(`/customer/orders/${saleId}`);
  };

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
          name="finalizar-pedido"
          onClick={ handleCheckout }
          testId="customer_checkout__button-submit-order"
          buttonText="Finalizar pedido"
        />
      </div>
    </div>
  );
}

export default Checkout;
