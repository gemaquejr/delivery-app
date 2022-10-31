const serviceFindAll = require('../services/productService');

const findAllProducts = async (_req, res) => {
  const response = await serviceFindAll()
  return res.status(response.status).json(response.json);
}

module.exports = findAllProducts;