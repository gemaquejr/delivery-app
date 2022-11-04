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

module.exports = { findAllSellers };