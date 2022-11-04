import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import ProductCard from '../components/ProductCard';
import { products } from '../services/apiHelper';
import { setProducts } from '../redux/reducers/productSlice';
import Header from '../components/Header';

function Products() {
  const dispatch = useDispatch();
  const arrayOfProducts = useSelector((state) => state.productSlice.products);
  const { orders } = useSelector((state) => state.productSlice);
  console.log(orders);

  const handlePrice = () => {
    let totalPrice = 0;
    if (orders.length > 0) {
      orders.forEach((product) => {
        totalPrice += product.quantidadeP * parseFloat(product.priceP);
      });
    }
    console.log(totalPrice);
    return totalPrice;
  };

  // console.log(handlePrice());

  useEffect(() => {
    const allProducts = async () => {
      const data = await products();
      dispatch(setProducts(data));
    };

    allProducts();
  }, [dispatch]);

  return (
    <div>
      <div>
        <Header />
      </div>
      <div className="card-container">
        {
          arrayOfProducts.map((item) => (
            <ProductCard
              key={ item.id }
              id={ item.id }
              name={ item.name }
              price={ item.price }
              urlImage={ item.urlImage }
            />
          ))
        }
      </div>

      <div className="valor-total">
        <h2>{ `VALOR TOTAL: ${handlePrice()}`}</h2>
      </div>
    </div>
  );
}

export default Products;
