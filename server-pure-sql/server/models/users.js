var { db } = require('../db');

module.exports = {
  getAll: function (callback) {
    db.query('SELECT * from users', (err, data) => {
      if(err) {
        callback(err);
      } else {
        callback(null, data);
      }
    });
  },
  create: function (user, callback) {
    db.query('INSERT INTO users (name) VALUES (?)', [user.name], (err, data) => {
      if(err) {
        callback(err);
      } else {
        callback(null, data);
      }
    });
  }
};
