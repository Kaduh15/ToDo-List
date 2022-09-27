const express = require('express');

const taskController = require('../controllers/taskController');
const taskCreateValidation = require('../middlewares/taskCreateValidation');
const { authAccess } = require('../middlewares/authMiddleware');

const router = express.Router();

router.use(authAccess);

router.get('/', taskController.getAll);

router.delete('/:id', async (req, res) => {
  const { id } = req.params;
  const { type, data } = await taskController.deleteTask(Number(id));

  res.status(type).json(data);
});

router.get('/:id', async (req, res) => {
  const { id } = req.params;
  const { type, data } = await taskController.getById(id);

  res.status(type).json(data);
});

router.post('/', taskCreateValidation, taskController.create);


module.exports = router;
