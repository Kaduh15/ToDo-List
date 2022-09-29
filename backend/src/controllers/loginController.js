const { StatusCodes } = require('http-status-codes');
const loginService = require('../services/loginService');

const login = async (req, res) => {
  const ipClient = req.connection.remoteAddress || req.socket.remoteAddress || req.connection.socket.remoteAddress;
  const data = await loginService.login(req.body, ipClient);

  res.status(StatusCodes.OK).json({token: data});
};

module.exports = {
  login,
}