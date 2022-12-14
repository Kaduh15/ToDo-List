const express = require('express');

const { map } = require('../utils/mapError');
const userController = require('../controllers/userController');
const userCreateValidation = require('../middlewares/userCreateValidation');
const { authAccess } = require('../middlewares/authMiddleware');
const router = express.Router();

router.post('/', userCreateValidation, userController.createUser);

router.use(authAccess);

router.get('/', userController.getUser)

router.get('/:id', async (req, res) => {
  const { id } = req.params;

  const {type, data} = await userController.getById(id);

  res.status(map(type)).json(data);
})

module.exports = router;