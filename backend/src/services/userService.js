const { User, Task } = require('../models');
const { throwError } = require('../utils/mapError');

const getAll = async () => {
  const result = await User.findAll({ 
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
      }],
      where: { id },
      attributes: { exclude: ['password'] },
    });

    if (result) return result;

    throwError({message: 'User not found', status: 'not found'});
}

const createUser = async (user) => {
  const result = await User.create(user);

  return result;
}

module.exports = {
  getAll,
  getById,
  createUser,
}
