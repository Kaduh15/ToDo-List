const { authTokenValidation } = require("../utils/JWT");
const { generateHash } = require("../utils/hash");

const authAccess = async (req, res, next) => {
  const token = req.headers.authorization;
  console.log("🚀 ~ file: authMiddleware.js ~ line 6 ~ authAccess ~ req.headers", req.headers)
  console.log("🚀 ~ file: authMiddleware.js ~ line 6 ~ authAccess ~ token", token)
  const ipClient = req.connection.remoteAddress || req.socket.remoteAddress || req.connection.socket.remoteAddress;
  
  const payload = await authTokenValidation(token);

  if (!payload) {
    res
      .status(401)
      .json({ message: 'error reading JWT' });
  }

  req.user = { ...payload, ip: generateHash(ipClient)};

  next();
}

module.exports = {
  authAccess,
}