const express = require('express');
const { StatusCodes } = require('http-status-codes');
const { generateHash } = require('../utils/hash');
const { authTokenValidation } = require('../utils/JWT');
const { throwError } = require('../utils/mapError');

const router = express.Router();

router.get('/', async (req, res) => {
  const token = req.headers.authorization;
  console.log("🚀 ~ file: authRouter.js ~ line 11 ~ router.get ~ token", token)
  console.log("🚀 ~ file: authRouter.js ~ line 11 ~ router.get ~ req.headers", req.headers)

  const ipClient =
    req.connection.remoteAddress ||
    req.socket.remoteAddress ||
    req.connection.socket.remoteAddress;

  if (!token)
    return res.status(StatusCodes.BAD_REQUEST).json({
      message: 'Token not existing',
    });

  const user = authTokenValidation(token);

  if (user.ip === generateHash(ipClient))
    throwError({ message: 'Relogin', status: StatusCodes.UNAUTHORIZED });

  res.sendStatus(StatusCodes.OK);
});

module.exports = router;
