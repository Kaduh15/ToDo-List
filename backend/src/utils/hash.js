const crypto = require('crypto');

const generateHash = (data) => crypto.createHash('md5').update(data).digest('hex');

module.exports = {
  generateHash
}