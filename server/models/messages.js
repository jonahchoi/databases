var { db } = require('../db');

var Sequelize = require('sequelize');
var Message = db.define('Message', {
  user_id: Sequelize.INTEGER,
  message: Sequelize.STRING,
  roomname: Sequelize.STRING
});

module.exports = {
  getAll: function (callback) {
    return Message.sync()
    .then(() => {
        return Message.findAll({raw: true});
        db.close();
      })
      .catch((err) => {
        console.error(err);
        db.close();
      })
  }, // a function which produces all the messages
  create: function (message) {
    return Message.sync()
      .then(() => {
        return Message.create(message);
      })
      .then(() => {
        return Message.findAll({raw: true});
        db.close();
      })
      .catch((err) => {
        console.log(err);
        db.close();
      })
  } // a function which can be used to insert a message into the database
};