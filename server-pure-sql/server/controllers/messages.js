var models = require('../models');
//use models.messages.getAll / .create
module.exports = {
  get: function (req, res) {
    models.messages.getAll((err, data) => {
      if(err) {
        res.sendStatus(404);
      } else {
        res.status(200).send(JSON.stringify(data));
      }
    });
  }, // a function which handles a get request for all messages
  post: function (req, res) {
    models.messages.create(req.body, (err, data) => {
      if (err) {
        res.sendStatus(404);
      } else {
        res.sendStatus(201);
      }
    });
  } // a function which handles posting a message to the database
};
