const jwt = require('jsonwebtoken');

const secret = 'secret_key';

const generateToken = async (email, role) => {
  const token = jwt.sign({ email, role }, secret);
  return token;
};

const validateToken = async (token) => {
  const decoded = jwt.verify(token, secret);
  return decoded;
};

module.exports = { generateToken, validateToken };