var { db } = require('../db');

var Sequelize = require('sequelize');
var User = db.define('User', {
  name: Sequelize.STRING
});

module.exports = {
  getAll: function (callback) {
    return User.sync()
      .then(() => {
        return User.findAll();
        db.close();
      })
      .catch((err) => {
        console.error(err);
        db.close();
      })
  },
  create: function (user) {
    return User.sync()
      .then(() => {
        return User.create(user);
        db.close();
      })
      .catch((err) => {
        console.log(err);
        db.close();
      })
  }
};
