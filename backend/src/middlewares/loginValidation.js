const { login } = require('../schemas/userSchema');
const { throwError } = require('../utils/mapError');

const loginValidation = (req, res, next) => {
  const validation = login.validate( req.body );
  
  if ( validation.error ) {
    throwError({
      message: validation.error.details[0].message,
      status: validation.error.details[0].type
    })
  }

  next();
};

module.exports = loginValidation;