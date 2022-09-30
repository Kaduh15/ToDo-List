const { StatusCodes } = require('http-status-codes');
const { User } = require('../models');
const { generateHash } = require('../utils/hash');
const { generateToken } = require('../utils/JWT');
const { throwError } = require('../utils/mapError');

const login = async ({ email, password }, ip) => {
  const user = await User.findOne({
    where: { email, password },
    attributes: { exclude: ['password']}
  });

  if (user) return generateToken({id: user.dataValues.id, ip: generateHash(ip) });

  throwError({
    message: 'User not registered or invalid email and password',
    status: StatusCodes.NOT_FOUND
  });
}

module.exports = {
  login,
}