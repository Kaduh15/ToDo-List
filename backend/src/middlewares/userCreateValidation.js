const { createdUser } = require('../schemas/userSchema');
const { throwError } = require('../utils/mapError');

const userCreateValidation = (req, res, next) => {
  const validation = createdUser.validate( req.body );

  if ( validation.error ) {
    throwError({
      message: validation.error.details[0].message,
      status: validation.error.details[0].type
    })
  }

  next();
};

module.exports = userCreateValidation;