const md5 = require('md5');
const { Users } = require('../../database/models');
const token = require('../auth/token');

const findRegister = async (email) => {
  const response = await Users.findOne({
    where: {
      email,
    },
  });
  return response;
};

const createRegister = async (name, email, password) => {
  if (!name || !email || !password) {
    return { status: 400, json: { message: 'Algum campo está vazio' } };
  }
  const userInfo = await findRegister(email);

  if (userInfo) return { status: 404, json: { message: 'Usuário já cadastrado' } };

  const hashedPassword = md5(password);

  const userToken = await token.generateToken(email);
  
  const newUser = await Users.create({
     name,
     email,
     password: hashedPassword,
     role: 'customer',
    });

  return { status: 201, json: { ...newUser.dataValues, userToken } };
};

module.exports = { createRegister };