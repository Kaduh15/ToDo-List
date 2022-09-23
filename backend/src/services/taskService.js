const { StatusCodes, ReasonPhrases } = require('http-status-codes');
const { Task, User} = require('../models');
const { throwError } = require('../utils/mapError');

const getAll = async () => {
  const data = await Task.findAll({ include: [{
    model: User,
    as: 'user',
    attributes: {
      exclude: ['password', 'email']
    },
  }],
  attributes: { exclude: ['userId'] }
});

  return data;
}

const getById = async (id) => {
  const data = await Task.findOne({
    include: [{
      model: User,
      as: 'user',
      attributes: { exclude: ['password', 'email'] }
    }],
    where: { id },
  })

  return data;
};

const createTask = async (id, task) => {
<<<<<<< HEAD
  const user = await User.findByPk(id);

  if (!user) return throwError({message: 'Task not found', status: ReasonPhrases.NOT_FOUND });

  const data = await Task.create({userId: id, ...task});
=======
  const data = await Task.create({userId: id, ...task});
  console.log("🚀 ~ file: taskService.js ~ line 32 ~ createTask ~ data", data)
>>>>>>> 61ac48139edfc35727a23141e566a104ba8f85bb

  return data;
};

module.exports = {
  getAll,
  getById,
  createTask,
}