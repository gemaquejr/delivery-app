const jwt = require('jsonwebtoken');

const generateToken = async (email, role) => {
  // const jwtConfig = {
  //   expiresIn: '7d',
  //   algorithm: 'HS256',
  // };
  
  const secret = 'secret_key';
  const token = jwt.sign({ email, role }, secret);
  return token;
}; //

module.exports = { generateToken };