const registerService = require('../services/registerService');

const createRegister = async (req, res) => {
  const { name, email, password } = req.body;

  const response = await registerService.createRegister(name, email, password);

  return res.status(response.status).json(response.json);
};

module.exports = { createRegister };