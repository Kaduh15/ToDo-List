const { authTokenValidation } = require("../utils/JWT");

const authAccess = async (req, res, next) => {
  const token = req.headers.authorization;
  const payload = await authTokenValidation(token);

  if (!payload) {
    res
      .status(401)
      .json({ message: 'error reading JWT' });
  }

  req.user = payload;

  next();
}

module.exports = {
  authAccess,
}