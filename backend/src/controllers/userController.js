const userServeice = require('../services/userService')

const getAll = async () => {
  const result = await userServeice.getAll();

  return { type: 200, data: result };
}

module.exports = {
  getAll
};
