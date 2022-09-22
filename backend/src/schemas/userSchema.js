const Joi = require('joi');

const createdUser = Joi.object({
  name: Joi.string().min(2).max(30).required(),
  email: Joi.string().email().required(),
  password: Joi.string().min(8)
    .pattern(new RegExp('^[a-zA-Z0-9]{3,30}$')).required(),
})

module.exports = { 
  createdUser,
}