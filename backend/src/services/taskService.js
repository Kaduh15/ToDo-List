const { StatusCodes, ReasonPhrases } = require('http-status-codes');
const { Task, User} = require('../models');
const { throwError } = require('../utils/mapError');

const getAll = async (userId) => {
  console.log("🚀 ~ file: taskService.js ~ line 6 ~ getAll ~ userId", userId)
  const options = { 
    where: userId && { userId },
    include: [{
      model: User,
      as: 'user',
      attributes: {
        exclude: ['password', 'email']
      },
  }],
  attributes: { exclude: ['userId'] }
}
  console.log("🚀 ~ file: taskService.js ~ line 17 ~ getAll ~ options", options)
  const data = await Task.findAll(options);

  return data;
}

const getById = async (taskId, userId) => {
  console.log("🚀 ~ file: taskService.js ~ line 25 ~ getById ~ taskId, userId", taskId, userId)
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

const deleteTask = async (id) => {
  const task = await Task.findByPk(id);

  if (!task) return throwError({message: 'Task not found', status: StatusCodes.NOT_FOUND });

  await Task.destroy({ where: { id }});
}

module.exports = {
  getAll,
  getById,
  create,
  deleteTask,
}