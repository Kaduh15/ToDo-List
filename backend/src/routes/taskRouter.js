const express = require('express');

const taskController = require('../controllers/taskController')

const router = express.Router();

router.get('/',async (req, res) => {
  const { type, data } = await taskController.getAll();

  res.status(type).json(data);
});

router.get('/:id', async (req, res) => {
  const { id } = req.params;
  const { type, data } = await taskController.getById(id);

  res.status(type).json(data);
});

module.exports = router;
