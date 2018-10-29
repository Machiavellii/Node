const { mongoose } = require('../server/db/mongoose');
const { Todo } = require('../server/models/Todo');

// const id = '5bd61d19d5236841042f5725';

// Todo.find({
//   _id: id
// }).then(todos => {
//   console.log(todos);
// });

// Todo.findOne({
//   _id: id
// }).then(todo => {
//   console.log(todo);
// });

// Todo.findById(id).then(todoId => {
//   if (!todoId) {
//     return console.log('Id not found');
//   }
//   console.log(todoId);
// });

//USER QUERIES
const { Users } = require('../server/models/Users');

const id = '5bd622a4e1763f3e10187298';

Users.findById(id).then(userId => {
  if (!userId) {
    return console.log('User not found');
  }

  console.log(userId);
});
