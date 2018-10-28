// const MongoClient = require('mongodb').MongoClient;
const { MongoClient, ObjectID } = require('mongodb');

MongoClient.connect(
  'mongodb://localhost:27017/TodoApp',
  { useNewUrlParser: true },
  (err, client) => {
    if (err) {
      return console.log('Unable connect');
    }
    console.log('Connected to MongoDB');

    const db = client.db('TodoApp');

    // db.collection('Todos')
    //   .findOneAndUpdate(
    //     {
    //       _id: ObjectID('5bd5f98eb317461c91794fcf')
    //     },
    //     {
    //       $set: {
    //         completed: true
    //       }
    //     },
    //     {
    //       returnOriginal: false
    //     }
    //   )
    //   .then(results => console.log(results));

    //USERS UPDATE NAME, AGE AND LOCATION
    db.collection('Users')
      .findOneAndUpdate(
        {
          _id: ObjectID('5bd5fc8db317461c9179514e')
        },
        {
          $set: { name: 'John', location: 'San Francisko' },
          $inc: { age: -2 }
        },
        {
          returnOriginal: false
        }
      )
      .then(results => console.log(results));
  }
);
