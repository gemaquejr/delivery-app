const jwt = require('jsonwebtoken');

const generateToken = async (email) => {
  const jwtConfig = {
    expiresIn: '7d',
    algorithm: 'HS256',
  };
  
  const secret = process.env.JWT_SECRET || 'group05';
  const token = jwt.sign({ data: email }, secret, jwtConfig);
  return token;
}; //

module.exports = generateToken;