const md5 = require('md5');
const { users } = require('../../database/models');
const token = require('../auth/token');

const findUser = async (email) => {
  const response = await users.findOne({
    where: {
      email,
    },
  });
  return response;
};

const login = async (email, password) => {
  if (!email || !password) {
    return { status: 400, json: { message: 'Algum campo está vazio' } };
  }
  const userInfo = await findUser(email);

  if (!userInfo) return { status: 404, json: { message: 'Usuário não encontrado' } };

  const hashedPassword = md5(password);
  if (hashedPassword !== userInfo.password) {
    return { status: 401, json: { message: 'Senha inválida' } };
  }

  const userToken = await token.generateToken(email);
  
  return { status: 200, json: { name: userInfo.name, role: userInfo.role, userToken } };
};

module.exports = { login };