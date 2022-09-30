const express = require('express');

const taskController = require('../controllers/taskController');
const taskCreateValidation = require('../middlewares/taskCreateValidation');
const { authAccess } = require('../middlewares/authMiddleware');

const router = express.Router();

router.use(authAccess);

router.get('/', taskController.getAll);

router.delete('/:id', taskController.deleteTask);

router.get('/:id', taskController.getById);

router.post('/', taskCreateValidation, taskController.create);


module.exports = router;
