import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

function OrderCard({
  orderId,
  orderStatus,
  orderDate,
  orderTotalValue,
  orderAddress,
  orderRole }) {
  return (
    <div className="order-card">
      <Link
        to={ `/${orderRole}/orders/${orderId}` }
      >
        <p data-testid={ `${orderRole}_orders__element-order-id-${orderId}` }>
          { `pedido ${orderId}` }
        </p>
        <h3 data-testid={ `${orderRole}_orders__element-delivery-status-${orderId}` }>
          { orderStatus }
        </h3>
        <p data-testid={ `${orderRole}_orders__element-order-date-${orderId}` }>
          { orderDate }
        </p>
        <p data-testid={ `${orderRole}_orders__element-card-price-${orderId}` }>
          { orderTotalValue }
        </p>
        { orderRole === 'seller'
        && (
          <p data-testid={ `${orderRole}_orders__element-card-address${orderId}` }>
            { orderAddress }
          </p>
        )}
      </Link>
    </div>
  );
}

OrderCard.propTypes = {
  orderId: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.number,
  ]).isRequired,
  orderStatus: PropTypes.string.isRequired,
  orderDate: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.number,
  ]).isRequired,
  orderTotalValue: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.number,
  ]).isRequired,
  orderAddress: PropTypes.string,
  orderRole: PropTypes.string.isRequired,
};

OrderCard.defaultProps = {
  orderAddress: '',
};

export default OrderCard;
