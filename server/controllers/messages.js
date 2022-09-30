var models = require('../models');
//use models.messages.getAll / .create
module.exports = {
  get: function (req, res) {
    models.messages.getAll()
      .then((data) => {
        // res.setHeader('Content-Type', 'application/json');
        // console.log(JSON.stringify(data));
        res.status(200).json(data);
      })
      .catch((err) => {
        console.error(err);
        res.sendStatus(404);
      });
  }, // a function which handles a get request for all messages
  post: function (req, res) {
    models.messages.create(req.body)
      .then((data) => {
        res.status(201).json(data);
      })
      .catch((err) => {
        console.error(err);
        res.sendStatus(404)
      });

  } // a function which handles posting a message to the database
};
