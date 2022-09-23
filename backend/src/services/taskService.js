const { Task, User} = require('../models');

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
  const data = await Task.create({userId: id, ...task});
  console.log("🚀 ~ file: taskService.js ~ line 32 ~ createTask ~ data", data)

  return data;
};

module.exports = {
  getAll,
  getById,
  createTask,
}