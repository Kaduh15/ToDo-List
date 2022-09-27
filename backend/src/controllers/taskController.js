const { StatusCodes } = require('http-status-codes');

const taskService = require('../services/taskService');
const { map } = require('../utils/mapError');

const getAll = async (req, res) => {
  const data = await taskService.getAll(req.user.id);

  res.status(StatusCodes.OK).json(data)
}

const getById = async (req, res) => {
  const { id: userId } = req.user;
  const { id: taskId } = req.params;
  const data = await taskService.getById(taskId, userId);

  res.status(StatusCodes.OK).json(data);
}

const create = async (req, res) => {
  const { id } = req.user;
  const task = req.body;
  const data = await taskService.create(id, task);

  res.status(StatusCodes.CREATED).json(data)
}

const deleteTask = async (req, res) => {
  const { id: userId } = req.user;
  const { id: taskId } = req.params;
  await taskService.deleteTask(taskId, userId);

  res.sendStatus(StatusCodes.NO_CONTENT);
}

module.exports = {
  getAll,
  getById,
  create,
  deleteTask,
}