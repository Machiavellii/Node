const mongoose = require('mongoose');

const Users = mongoose.model('Users', {
  name: {
    type: String,
    require: true,
    minLength: 2,
    trim: true
  },
  email: {
    type: String,
    require: true,
    minLength: 1,
    trim: true
  }
});

module.exports = { Users };

// const newUser = new Users({
//   name: 'John',
//   email: 'john@gmail.com'
// });

// newUser
//   .save()
//   .then(result => {
//     console.log(result);
//   })
//   .catch(err => {
//     console.log(err);
//   });
