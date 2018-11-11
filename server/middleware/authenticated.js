const { Users } = require('../models/Users');

const authenticated = (req, res, next) => {
  const token = req.header('x-auth');

  Users.findByToken(token)
    .then(user => {
      if (!user) {
        return Promise.reject();
      }

      req.user = user;
      req.token = token;
      next();
    })
    .catch(e => {
      res.status(401).send();
    });
};

module.exports = { authenticated };
