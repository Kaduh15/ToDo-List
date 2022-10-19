const { createdUser } = require('../schemas/userSchema');
const { throwError } = require('../utils/mapError');

const userCreateValidation = (req, res, next) => {
  console.log("🚀 ~ file: userCreateValidation.js ~ line 5 ~ userCreateValidation ~ req.body", req.body)
  const validation = createdUser.validate( req.body );
  console.log("🚀 ~ file: userCreateValidation.js ~ line 7 ~ userCreateValidation ~ validation", validation)

  if ( validation.error ) {
    throwError({
      message: validation.error.details[0].message,
      status: validation.error.details[0].type
    })
  }

  next();
};

module.exports = userCreateValidation;