const productService = require('../services/productService');

const findAllProducts = async (_req, res) => {
  const response = await productService.findAll();
  return res.status(response.status).json(response.json);
};

module.exports = { findAllProducts };