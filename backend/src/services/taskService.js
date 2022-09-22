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

module.exports = {
  getAll,
  getById,
}