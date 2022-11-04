import React from 'react';

function TableOrder() {
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
            <option value="Fulana">Fulana</option>
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
