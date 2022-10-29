const loginService = require('../services/loginService');

const login = async (req, res) => {
  console.log(req.body);
  const { email, password } = req.body;

  const response = await loginService(email, password);

  return res.status(response.status).json(response.json);
};

module.exports = login;