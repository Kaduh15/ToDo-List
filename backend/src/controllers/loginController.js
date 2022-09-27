const { StatusCodes } = require('http-status-codes');
const loginService = require('../services/loginService');

const login = async (req, res) => {
  const data = await loginService.login(req.body);

  res.status(StatusCodes.OK).json(data);
};

module.exports = {
  login,
}