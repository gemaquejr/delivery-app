const { users } = require('../../database/models');

const findAllSellers = async () => {
  const sellers = await users.findAll({
    where: {
      role: 'seller',
    },
  });

  const response = { status: 200, json: sellers };

  return response;
};

const findUserById = async (id) => {
  const user = await users.findOne({
    where: {
      id,
    },
  });

  return { status: 200, json: user };
};

module.exports = { findAllSellers, findUserById };
