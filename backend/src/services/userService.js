const { User, Task } = require('../models');
const { throwError } = require('../utils/mapError');

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
  const result = await User.create(user);

  return result;
}

module.exports = {
  getUser,
  getById,
  createUser,
}
