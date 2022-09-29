const express = require('express');
const { StatusCodes } = require('http-status-codes');
const { authTokenValidation } = require('../utils/JWT');

const router = express.Router();

router.get('/', async (req, res) => {
  const { authorization } = req.headers;

  if (!authorization) return res.status(StatusCodes.BAD_REQUEST).json({
    message: 'Token not existing'
  });

  authTokenValidation(authorization);

  res.sendStatus(StatusCodes.OK);
})

module.exports = router;