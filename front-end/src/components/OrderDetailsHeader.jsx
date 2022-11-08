import React from 'react';
import PropTypes from 'prop-types';
import Button from './Button';

function OrderDetailsHeader({ page, orderId, sellerName, saleDate, status }) {
  return (
    <div>
      <span
        data-testid={
          `${page}__element-order-details-label-order-id`
        }
      >
        {`PEDIDO ${orderId}`}
      </span>
      <span
        data-testid={
          `${page}__element-order-details-label-seller-name`
        }
      >
        {`Vendido por: ${sellerName}`}
      </span>
      <span
        data-testid={
          `${page}__element-order-details-label-order-date`
        }
      >
        {saleDate}
      </span>
      <span
        data-testid={
          `${page}__element-order-details-label-delivery-status`
        }
      >
        {status}
      </span>
      <span>
        {page === 'customer_order_details' ? (
          <div>
            <Button
              testId="customer_order_details__button-delivery-check"
              type="button"
              name="Entregue"
              onClick={ () => console.log('marcou como entregue') }
              buttonText="MARCAR COMO ENTREGUE"
              disabled
            />
          </div>)
          : (
            <div>
              <Button />
              <Button />
            </div>
          )}
      </span>
    </div>
  );
}

OrderDetailsHeader.propTypes = {
  page: PropTypes.string.isRequired,
  orderId: PropTypes.number,
  sellerName: PropTypes.string,
  saleDate: PropTypes.string,
  status: PropTypes.string,
};

OrderDetailsHeader.defaultProps = {
  orderId: 0,
  sellerName: '',
  saleDate: '',
  status: '',
};

export default OrderDetailsHeader;
