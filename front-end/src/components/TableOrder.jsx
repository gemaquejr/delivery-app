import React, { useEffect, useState } from 'react';
import { findAllSellers } from '../services/apiHelper';
import FormInput from './FormInput';

function TableOrder() {
  const [sellers, setSeller] = useState([]);
  const [address, setAddress] = useState('');
  const [addressNumber, setAddressNumber] = useState('');

  useEffect(() => {
    const findSellers = async () => {
      const data = await findAllSellers();
      setSeller(data);
    };

    findSellers();
  }, []);

  const handleChange = ({ target }) => {
    if (target.name === 'address') {
      setAddress(target.value);
    }
    if (target.name === 'addressNumber') {
      setAddressNumber(target.value);
    }
  };

  return (
    <div>
      <div>
        <label htmlFor="seller">
          P. Vendedora Responsável
          <select
            name="seller"
            id="seller"
            data-testid="customer_checkout__select-seller"
          >
            { sellers.map((seller) => (
              <option key={ seller.id } value={ seller.id }>
                { seller.name }
              </option>)) }
          </select>
        </label>
      </div>
      <div>
        <FormInput
          label="Endereço"
          type="text"
          name="address"
          value={ address }
          onChange={ handleChange }
          testId="customer_checkout__input-address"
        />
        {/* <p>Endereço</p>
        <input type="text" data-testid="customer_checkout__input-address" /> */}
      </div>
      <div>
        <FormInput
          label="Número"
          type="text"
          name="addressNumber"
          value={ addressNumber }
          onChange={ handleChange }
          testId="customer_checkout__input-address-number"
        />
        {/* <p>Número</p>
        <input type="text" data-testid="customer_checkout__input-address-number" /> */}
      </div>
    </div>
  );
}

export default TableOrder;
