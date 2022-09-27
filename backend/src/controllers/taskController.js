const { StatusCodes } = require('http-status-codes');

const taskService = require('../services/taskService');
const { map } = require('../utils/mapError');

const getAll = async (req, res) => {
  const data = await taskService.getAll(req.user.id);

  res.status(StatusCodes.OK).json(data)
}

const getById = async (id) => {
  const data = await taskService.getById(id);

  return { type: StatusCodes.OK, data };
}

const createTask = async (id, task) => {
  const data = await taskService.createTask(id, task);

  return { type: StatusCodes.CREATED, data };
}

const deleteTask = async (id) => {
  await taskService.deleteTask(id);

  return { type: map('delete') };
}

module.exports = {
  getAll,
  getById,
  createTask,
  deleteTask,
}