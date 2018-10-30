const { mongoose } = require('../server/db/mongoose');
const { Todo } = require('../server/models/Todo');
const { MongoClient, ObjectID } = require('mongodb');

//Remove all
// Todo.remove({}).then(result => {
//   console.log(result)
// })

//Remove byId
// Todo.findByIdAndRemove(id).then(todo => {
//   console.log(todo)
// })
