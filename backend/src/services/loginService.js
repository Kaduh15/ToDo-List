const { User } = require('../models');

const login = async ({ email, password }) => {
  const data = await User.findOne({
    where: { email, password },
    attributes: { exclude: ['password']}
  });

  return data;
}

module.exports = {
  login,
}