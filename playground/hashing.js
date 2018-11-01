const { SHA256 } = require('crypto-js');
const jwt = require('jsonwebtoken');

let data = {
  id: 10
};

const token = jwt.sign(data, '123');

console.log(token);
const decoded = jwt.verify(token, '123');
console.log(decoded);
