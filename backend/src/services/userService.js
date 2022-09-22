const { User, Task } = require('../models');

const getAll = async () => {
  const result = await User.findAll({ 
    include: [{
      model: Task,
      as: 'tasks',
      attributes: {
        exclude: ['userId']
      }
    }],
    attributes: {
      exclude: ['password']
    }
  });

  return result;
};

module.exports = {
  getAll
}