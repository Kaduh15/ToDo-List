const express = require('express');

const userController = require('../controllers/userController');
const router = express.Router();

router.get('/', async (req, res) => {
  const {type, data} = await userController.getAll();

  res.status(type).json(data);
})

module.exports = router;