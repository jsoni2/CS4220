const crypto = require('crypto');
const hash = crypto.createHash('sha256');

hash.update('This is the data to hash');

console.log(hash.digest('hex'));