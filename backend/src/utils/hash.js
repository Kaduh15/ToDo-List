const crypto = require('crypto');

const generateHash = (data) => crypto.createHash('sha256').update(data).digest('hex');

module.exports = {
  generateHash
}