import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import './OrderCard.css';

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
        <div className="div-pedido-number">
          <p data-testid={ `${orderRole}_orders__element-order-id-${orderId}` }>
            { `pedido ${orderId}` }
          </p>
        </div>
        <div className="div-status-order">
          <h3 data-testid={ `${orderRole}_orders__element-delivery-status-${orderId}` }>
            { orderStatus }
          </h3>
        </div>
        <div className="div-order-date">
          <p data-testid={ `${orderRole}_orders__element-order-date-${orderId}` }>
            { orderDate }
          </p>
        </div>
        <div className="div-price-order">
          <p data-testid={ `${orderRole}_orders__element-card-price-${orderId}` }>
            { orderTotalValue.replace('.', ',') }
          </p>
        </div>
        { orderRole === 'seller'
        && (
          <div className="div-order-address">
            <p data-testid={ `${orderRole}_orders__element-card-address-${orderId}` }>
              { orderAddress }
            </p>
          </div>
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
