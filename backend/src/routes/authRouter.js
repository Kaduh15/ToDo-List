const express = require('express');
const { StatusCodes } = require('http-status-codes');
const { generateHash } = require('../utils/hash');
const { authTokenValidation } = require('../utils/JWT');
const { throwError } = require('../utils/mapError');

const router = express.Router();

router.get('/', async (req, res) => {
  const { authorization } = req.headers;
  const { user } = req;
  const ipClient = req.connection.remoteAddress || req.socket.remoteAddress || req.connection.socket.remoteAddress;

  if (!authorization) return res.status(StatusCodes.BAD_REQUEST).json({
    message: 'Token not existing'
  });

  
  authTokenValidation(authorization);
  
  if (user.ip === generateHash(ipClient)) throwError({ message: 'Relogin', status: StatusCodes.UNAUTHORIZED });

  res.sendStatus(StatusCodes.OK);
})

module.exports = router;