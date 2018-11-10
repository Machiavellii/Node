// const { SHA256 } = require('crypto-js');
// const jwt = require('jsonwebtoken');

const bcrypt = require('bcryptjs');

let password = 'abc123';

// bcrypt.genSalt(10, (err, salt) => {
//   bcrypt.hash(password, salt, (err, hash) => {
//     password = hash;
//     console.log(password);
//   });
// });

let hashingPassword =
  '$2a$10$EkzATbjp4UqG4.1quw2S3.Ez0p5ii.8C5hsYT3ZHM9hWVcnXEQyS2';

bcrypt.compare(password, hashingPassword, (err, res) => {
  console.log(res);
});

// let data = {
//   id: 10
// };

// const token = jwt.sign(data, '123');

// console.log(token);
// const decoded = jwt.verify(token, '123');
// console.log(decoded);
