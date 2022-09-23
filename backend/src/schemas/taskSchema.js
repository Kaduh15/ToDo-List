const Joi = require('joi');

const createdTask = Joi.object({
  nameTask: Joi.string().min(2).max(30).required(),
  description: Joi.string().min(15),
  status: Joi.boolean(),
})

module.exports = { 
  createdTask,
}