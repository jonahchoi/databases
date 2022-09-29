var models = require('../models');
//use models.users.getAll / .create
module.exports = {
  get: function (req, res) {
    models.users.getAll((err, data) => {
      if(err) {
        res.sendStatus(404);
      } else {
        res.status(200).send(JSON.stringify(data));
      }
    })
  },
  post: function (req, res) {
    models.users.create(req.body, (err, data) => {
      if(err) {
        res.sendStatus(404);
      } else {
        res.sendStatus(201);
      }
    })
  }
};
