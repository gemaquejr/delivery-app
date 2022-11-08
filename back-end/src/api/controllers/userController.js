const userService = require('../services/userService');

const findAllSellers = async (_req, res) => {
  const response = await userService.findAllSellers();
  
  return res.status(response.status).json(response.json);
};

const findUserById = async (req, res) => {
  const { id } = req.params;

  const response = await userService.findUserById(id);

  return res.status(response.status).json(response.json);
};

module.exports = { findAllSellers, findUserById };
