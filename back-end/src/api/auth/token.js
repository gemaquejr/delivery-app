const jwt = require('jsonwebtoken');

const secret = require('fs').readFileSync('./jwt.evaluation.key', { encoding: 'utf-8' });

const generateToken = async (email, role) => {
  const token = jwt.sign({ email, role }, secret);
  return token;
};

const validateToken = async (token) => {
  const decoded = jwt.verify(token, secret);
  return decoded;
};

module.exports = { generateToken, validateToken };