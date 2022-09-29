var { db } = require('../db');

module.exports = {
  getAll: function () {
    db.query('SELECT * from messages', (err, data) => {
      console.log(data);
    });
  }, // a function which produces all the messages
  create: function () {} // a function which can be used to insert a message into the database
};
module.exports.getAll();