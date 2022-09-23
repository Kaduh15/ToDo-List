const { createdTask } = require('../schemas/taskSchema');
const { throwError } = require('../utils/mapError');

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