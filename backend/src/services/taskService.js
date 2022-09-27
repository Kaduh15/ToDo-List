const { StatusCodes } = require('http-status-codes');
const { Task, User } = require('../models');
const { throwError } = require('../utils/mapError');

const getAll = async (userId) => {
  const data = await Task.findAll({ 
    where: userId && { userId },
    include: [{
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

const getById = async (taskId, userId) => {
  const data = await Task.findOne({
    where: { id: taskId, userId },
    include: [{
      model: User,
      as: 'user',
      attributes: { exclude: ['password', 'email'] },
    }],
    attributes: { exclude: ['userId']}}
  );

  if (data) return data;

  throwError({message: 'Task not found', status: StatusCodes.NOT_FOUND});
};

const create = async (id, task) => {
  const user = await User.findByPk(id);

  if (!user) return throwError({message: 'User not found', status: StatusCodes.NOT_FOUND });

  const data = await Task.create({userId: id, ...task});

  return data;
};

const deleteTask = async (taskId, userId) => {
  const task = await Task.findOne({
    where: { id: taskId, userId}
  });

  if (!task) return throwError({message: 'Task not found', status: StatusCodes.NOT_FOUND });

  await Task.destroy({ where: { id: taskId }});
}

module.exports = {
  getAll,
  getById,
  create,
  deleteTask,
}