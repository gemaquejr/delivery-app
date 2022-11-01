const { products } = require('../../database/models');

const findAll = async () => {
  const response = await products.findAll();
  return { status: 200, json: response };
};

module.exports = { findAll };
