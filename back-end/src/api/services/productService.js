const { products } = require('../../database/models');

const findAllProducts = async () => {
  const response = await products.findAll();
  return { status: 200, json: response };
}

module.exports = findAllProducts;
