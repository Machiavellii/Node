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
    //   .find({
    //     _id: new ObjectID('5bd4eb4de2d76c2a10f1b9a4')
    //   })
    //   .toArray()
    //   .then(docs => {
    //     console.log('Todos');
    //     console.log(JSON.stringify(docs));
    //   })
    //   .catch(err => {
    //     console.log(`Unable to fetch ${err}`);
    //   });
    // client.close();

    // db.collection('Todos')
    // .find()
    // .toArray()
    // .then(docs => {
    //   console.log('Todos');
    //   console.log(JSON.stringify(docs));
    // })
    // .catch(err => {
    //   console.log(`Unable to fetch ${err}`);
    // });

    db.collection('Users')
      .find({
        name: 'John'
      })
      .toArray()
      .then(docs => {
        // docs.filter(doc => {
        //   doc.name !== 'John' ? console.log(doc.name) : '';
        // });
        console.log(docs);
      })
      .catch(err => {
        console.log(`Unable to fetch ${err}`);
      });
  }
);
