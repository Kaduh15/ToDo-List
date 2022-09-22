const express = require('express');

const { map } = require('../utils/mapError');
const userController = require('../controllers/userController');
const router = express.Router();

router.get('/', async (req, res) => {
  const {type, data} = await userController.getAll();
  res.status(map(type)).json(data);
})

router.get('/:id', async (req, res) => {
  const { id } = req.params;

  const {type, data} = await userController.getById(id);

  res.status(map(type)).json(data);
})

module.exports = router;