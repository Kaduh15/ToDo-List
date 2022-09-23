const userServeice = require('../services/userService')

const getAll = async () => {
  const result = await userServeice.getAll();

  return { type: 'ok', data: result };
}

const getById = async (id) => {
  const result = await userServeice.getById(id);

  return { type: 'ok', data: result };
}

const createUser = async (user) => {
  const result = await userServeice.createUser(user);

  return { type: 'created', data: result };
}

module.exports = {
  getAll,
  getById,
  createUser,
};
