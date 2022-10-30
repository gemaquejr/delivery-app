import React from 'react';
import { useParams } from 'react-router-dom';

function SellerOrdersDetails() {
  const { id } = useParams();

  return (
    <div>
      <h2>
        Página de Pedidos
        { id }
        - Teste
      </h2>
    </div>
  );
}

export default SellerOrdersDetails;
