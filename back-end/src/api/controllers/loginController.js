const loginService = require('../services/loginService');

const login = async (req, res) => {
  const { email, password } = req.body;

  const response = await loginService.login(email, password);

  return res.status(response.status).json(response.json);
};

const validate = async (req, res) => {
  const token = req.header('Authorization');

  const response = await loginService.validate(token);

  return res.status(response.status).json(response.json);
}

module.exports = { login, validate };