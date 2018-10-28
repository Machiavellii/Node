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

    // db.collection('Todos').insertOne(
    //   {
    //     text: 'Something to do',
    //     completed: false
    //   },
    //   (err, res) => {
    //     if (err) {
    //       return console.log('Unable to insert Todo', err);
    //     }

    //     console.log(JSON.stringify(res.ops));
    //   }
    // );

    db.collection('Users').insertOne(
      {
        name: 'John',
        age: 33,
        location: 'New York'
      },
      (err, res) => {
        if (err) {
          return console.log('Unable to insert User in TodoApp', err);
        }

        console.log(JSON.stringify(res.ops));
      }
    );

    client.close();
  }
);
