import React, { useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';
import { findAllSellers } from '../services/apiHelper';
import FormInput from './FormInput';
import { setUserAddress, setUserAddressNumber } from '../redux/reducers/userSlice';
import './TableOrder.css';

function TableOrder() {
  const dispatch = useDispatch();
  const [sellers, setSeller] = useState([]);
  const [address, setAddress] = useState('');
  const [sellerIdValue, setSellerIdValue] = useState('');
  const [addressNumber, setAddressNumber] = useState('');

  useEffect(() => {
    const findSellers = async () => {
      const data = await findAllSellers();
      setSeller(data);
      dispatch(setUserAddress(address));
      dispatch(setUserAddressNumber(addressNumber));
    };

    findSellers();
  }, [dispatch, address, addressNumber]);

  const handleChange = ({ target }) => {
    if (target.name === 'address') {
      setAddress(target.value);
    }
    if (target.name === 'addressNumber') {
      setAddressNumber(target.value);
    }
    if (target.name === 'seller') {
      setSellerIdValue(target.value);
    }
  };

  return (
    <div>
      <label htmlFor="seller-select">
        <p className="p-vendedora">P. Vendedora Responsável</p>
        <div className="div-select">
          <select
            name="seller"
            id="seller-select"
            data-testid="customer_checkout__select-seller"
            value={ sellerIdValue }
            onChange={ handleChange }
          >
            { sellers.map((seller) => (
              <option
                key={ seller.id }
                id={ seller.id }
                name={ seller.name }
                value={ seller.id }
              >
                { seller.name }
              </option>)) }
          </select>
        </div>
      </label>

      <div>
        <FormInput
          label="Endereço"
          type="text"
          name="address"
          value={ address }
          onChange={ handleChange }
          testId="customer_checkout__input-address"
          classNameInput="input-pedido-addres"
        />
      </div>
      <div>
        <FormInput
          label="Número"
          type="text"
          name="addressNumber"
          value={ addressNumber }
          onChange={ handleChange }
          testId="customer_checkout__input-address-number"
          classNameInput="input-pedido-number"
        />
      </div>
    </div>
  );
}

export default TableOrder;
