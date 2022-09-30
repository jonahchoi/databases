var Messages = {


  _data: {},

  items: function() {
    return _.chain(Object.values(Messages._data)).sortBy('createdAt');
  },

  add: function(message, callback = ()=>{}) {
    Messages._data[message.id] = message;
    callback(Messages.items());
  },

  update: function(messages, callback = ()=>{}) {
    var length = Object.keys(Messages._data).length;

    for (let message of messages) {
      Messages._data[message.id] = Messages._conform(message);
      // console.log('id-->', message);
    }

    // only invoke the callback if something changed
    if (Object.keys(Messages._data).length !== length) {
      callback(Messages.items());
    }
    console.log('stored msgs' ,Messages._data)
  },

  _conform: function(message) {
    // ensure each message object conforms to expected shape
    message.message = message.message || '';
    message.user_id = message.user_id || '';
    message.roomname = message.roomname || '';
    return message;
  }

};
