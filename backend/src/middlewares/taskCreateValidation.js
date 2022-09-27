const Joi = require('joi');

const { throwError } = require('../utils/mapError');

const createdTask = Joi.object({
  nameTask: Joi.string().min(2).max(30).required(),
  description: Joi.string().min(15),
  status: Joi.boolean(),
})

const taskCreateValidation = (req, res, next) => {
  const validation = createdTask.validate( req.body );

  if ( validation.error ) {
    throwError({
      message: validation.error.details[0].message,
      status: validation.error.details[0].type
    })
  }

  next();
};

module.exports = taskCreateValidation;