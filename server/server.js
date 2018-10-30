const express = require('express');
const bodyParser = require('body-parser');
const { ObjectID } = require('mongodb');

const { mongoose } = require('./db/mongoose');
const { Todo } = require('./models/Todo');
const { Users } = require('./models/Users');

const app = express();

const port = process.env.PORT || 3000;

app.use(bodyParser.json());

app.post('/todos', (req, res) => {
  const newTodo = new Todo({
    text: req.body.text
  });

  newTodo
    .save()
    .then(result => {
      res.send(result);
    })
    .catch(err => {
      res.send(err);
    });
});

app.get('/todos', (req, res) => {
  Todo.find()
    .then(todos => {
      res.send(todos);
    })
    .catch(err => console.log(err));
});

app.get('/todos/:id', (req, res) => {
  const id = req.params.id;
  if (!ObjectID.isValid(id)) {
    return res.status(404).send('Id do not exist');
  }
  Todo.findById(id)
    .then(todoId => {
      if (!todoId) {
        return res.status(404).send('Id not found');
      }
      res.send(todoId);
    })
    .catch(err => {
      res.status(400).send(err);
    });
});

app.delete('/todos/:id', (req, res) => {
  const id = req.params.id;
  if (!ObjectID.isValid(id)) {
    return res.status(404).send('Id do not exist');
  }
  Todo.findOneAndDelete(id)
    .then(todoId => {
      if (!todoId) {
        return res.status(404).send('Id not found');
      }
      res.send(todoId);
    })
    .catch(err => {
      res.status(400).send(err);
    });
});

app.listen(port, () => {
  console.log(`Started on port ${port}`);
});
