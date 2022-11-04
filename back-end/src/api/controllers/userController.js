const userService = require('../services/userService');

const findAllSellers = async (req, res) => {
  const response = await userService.findAllSellers();
  
  return res.status(response.status).json(response.json);
};

module.exports = { findAllSellers };