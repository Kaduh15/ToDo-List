const Joi = require('joi');

const { throwError } = require('../utils/mapError');

const createdTask = Joi.object({
  nameTask: Joi.string().min(2).max(30).required(),
  description: Joi.string().min(0),
  status: Joi.boolean(),
})

const taskCreateValidation = (req, res, next) => {
  console.log("🚀 ~ file: taskCreateValidation.js ~ line 13 ~ taskCreateValidation ~ req.body", req.body)
  const validation = createdTask.validate( req.body );

  if ( validation.error ) {
    return throwError({
      message: validation.error.details[0].message,
      status: validation.error.details[0].type
    })
  }

  next();
};

module.exports = taskCreateValidation;