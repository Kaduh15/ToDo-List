const { StatusCodes } = require('http-status-codes');

const taskService = require('../services/taskService');

const getAll = async () => {
  const data = await taskService.getAll();

  return { type: StatusCodes.OK, data };
}

const getById = async (id) => {
  const data = await taskService.getById(id);

  return { type: StatusCodes.OK, data };
}

const createTask = async (id, task) => {
  const data = await taskService.createTask(id, task);

  return { type: StatusCodes.CREATED, data };
}

module.exports = {
  getAll,
  getById,
  createTask
}