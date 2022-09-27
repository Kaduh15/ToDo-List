const { StatusCodes } = require('http-status-codes');
const { User } = require('../models');
const { generateToken } = require('../utils/JWT');
const { throwError } = require('../utils/mapError');

const login = async ({ email, password }) => {
  const user = await User.findOne({
    where: { email, password },
    attributes: { exclude: ['password']}
  });

  if (user) return generateToken(user.dataValues);

  throwError({
    message: 'User not registered or invalid email and password',
    status: StatusCodes.NOT_FOUND
  });
}

module.exports = {
  login,
}