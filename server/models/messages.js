var { db } = require('../db');

module.exports = {
  getAll: function (callback) {
    db.query('SELECT * from messages', (err, data) => {
      if(err) {
        callback(err);
      } else {
        callback(null, data);
      }
    });
  }, // a function which produces all the messages
  create: function (message, callback) {
    db.query('INSERT INTO messages (message, username, roomname, user_id) VALUES (?, ?, ?, ?)', [message.message, message.username, message.roomname, 1], (err, data) => {
      if(err) {
        callback(err);
      } else {
        callback(null, data);
      }
    });
  } // a function which can be used to insert a message into the database
};