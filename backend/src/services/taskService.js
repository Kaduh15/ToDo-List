const { StatusCodes, ReasonPhrases } = require('http-status-codes');
const { Task, User} = require('../models');
const { throwError } = require('../utils/mapError');

const getAll = async () => {
  const data = await Task.findAll({ include: [{
    model: User,
    as: 'user',
    attributes: {
      exclude: ['password', 'email']
    },
  }],
  attributes: { exclude: ['userId'] }
});

  return data;
}

const getById = async (id) => {
  const data = await Task.findOne({
    where: { id },
    include: [{
      model: User,
      as: 'user',
      attributes: { exclude: ['password', 'email'] },
    }],
    attributes: { exclude: ['userId']}}
  );

  if (data) return data;

  throwError({message: 'Task not found', status: ReasonPhrases.NOT_FOUND});
};

const createTask = async (id, task) => {
  const user = await User.findByPk(id);

  if (!user) return throwError({message: 'User not found', status: ReasonPhrases.NOT_FOUND });

  const data = await Task.create({userId: id, ...task});

  return data;
};

module.exports = {
  getAll,
  getById,
  createTask,
}