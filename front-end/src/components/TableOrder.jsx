import React, { useEffect, useState } from 'react';
import { findAllSellers } from '../services/apiHelper';

function TableOrder() {
  const [sellers, setSeller] = useState([]);

  useEffect(() => {
    const findSellers = async () => {
      const data = await findAllSellers();
      console.log(data);
      setSeller(data);
    };

    findSellers();
  }, []);

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
        <p>Endereço</p>
        <input type="text" data-testid="customer_checkout__input-address" />
      </div>
      <div>
        <p>Número</p>
        <input type="text" data-testid="customer_checkout__input-address-number" />
      </div>
    </div>
  );
}

export default TableOrder;
