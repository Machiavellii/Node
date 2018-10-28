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

    //deleteMany
    // db.collection('Todos')
    //   .deleteMany({
    //     text: 'Eat lunch'
    //   })
    //   .then(result => {
    //     console.log(result);
    //   })

    //deleteOne
    // db.collection('Todos')
    //   .deleteOne({
    //     text: 'Eat lunch'
    //   })
    //   .then(result => {
    //     console.log(result);
    //   });

    //FindOneAndDelete
    // db.collection('Todos')
    //   .findOneAndDelete({
    //     text: 'Something to do'
    //   })
    //   .then(result => {
    //     console.log(result);
    //   });

    //USERS
    //deleteMany
    db.collection('Users')
      .deleteMany({
        name: 'John'
      })
      .then(result => {
        console.log(result);
      });

    //findOneAndDelete
    db.collection('Users')
      .findOneAndDelete({
        _id: ObjectID('5bd5fbf2b317461c91795114')
      })
      .then(result => {
        console.log(result);
      });
  }
);
