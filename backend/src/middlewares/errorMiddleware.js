const { map } = require("../utils/mapError");

const error = (err, _req, res, _next) => {
  res
    .status(map(err.status) || err.status)
    .json({ message: err.message });
}
module.exports = error;
