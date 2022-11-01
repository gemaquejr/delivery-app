const salesService = require('../services/salesService');

const newSale = async (req, res) => {
    const saleInfo = req.body;

  const response = await salesService.createSale(saleInfo);

  return res.status(response.status).json(response.json);
};

module.exports = { newSale };