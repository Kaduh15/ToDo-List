const { User, Task } = require('../models');
const { throwError } = require('../utils/mapError');
const { generateToken } = require('../utils/JWT');
const { StatusCodes } = require('http-status-codes');

const getUser = async (id) => {
  const result = await User.findOne({
    where: { id },
    include: [{
      model: Task,
      as: 'tasks',
      attributes: {
        exclude: ['userId']
      }
    }],
    attributes: {
      exclude: ['password']
    }
  });

  return result;
};

const getById = async (id) => {
    const result = await User.findOne({
      include: [{
        model: Task,
        as: 'tasks',
        attributes: {
          exclude: ['userId'],
        }
      }],
      where: { id },
      attributes: { exclude: ['password', 'id'] },
    });

    if (result) return result;

    throwError({message: 'User not found', status: 'not found'});
}

const createUser = async (user) => {
  const hasEmail = await User.findOne({email: user.email});
  if (hasEmail) return throwError({message: 'E-mail already registered', status: StatusCodes.CONFLICT});

  const result = await User.create(user);
  if (result.dataValues) {
    const { password, ...newUser } = result.dataValues
    return{ token: generateToken(newUser)};
  }
}

module.exports = {
  getUser,
  getById,
  createUser,
}
