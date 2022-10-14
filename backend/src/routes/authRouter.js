const express = require('express');
const { StatusCodes } = require('http-status-codes');
const { authAccess } = require('../middlewares/authMiddleware');
const { generateHash } = require('../utils/hash');
const { authTokenValidation } = require('../utils/JWT');
const { throwError } = require('../utils/mapError');

const router = express.Router();

router.get('/', authAccess, async (req, res) => {
  const { user } = req;

  const ipClient =
    req.connection.remoteAddress ||
    req.socket.remoteAddress ||
    req.connection.socket.remoteAddress;

  if (user.ip !== generateHash(ipClient)) throwError({ message: 'Relogin', status: StatusCodes.UNAUTHORIZED });

  res.sendStatus(StatusCodes.OK);
});

module.exports = router;
