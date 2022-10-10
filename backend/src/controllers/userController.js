const { StatusCodes } = require('http-status-codes');

const userServeice = require('../services/userService')

const getUser = async (req, res) => {
  const { id } = req.user;
  const data = await userServeice.getUser(id);

  res.status(StatusCodes.OK).json(data);
}

const getById = async (id) => {
  const result = await userServeice.getById(id);

  return { type: 'ok', data: result };
}

const createUser = async (req, res) => {
  const data = await userServeice.createUser(req.body);

  res.status(StatusCodes.CREATED).json(data);
}

module.exports = {
  getUser,
  getById,
  createUser,
};
