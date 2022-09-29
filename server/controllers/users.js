var models = require('../models');
//use models.users.getAll / .create
module.exports = {
  get: function (req, res) {
    models.users.getAll()
      .then((data) => {
        res.status(200).send(JSON.stringify(data));
      })
      .catch((err) => {
        res.sendStatus(404);
      });
  },
  post: function (req, res) {
    models.users.create(req.body)
      .then(() => {
        res.sendStatus(201);
      })
      .catch((err) => {
        res.sendStatus(404);
      });
  }
};
