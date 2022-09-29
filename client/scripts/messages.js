// This object houses all the message _data_ for the app.
// Treat it like a data structure - add methods to interact
// with and manipulate the data.

var Messages = {

  // TODO: Define how you want to store your messages.
  _data: [],

  // TODO: Define methods which allow you to retrieve from,
  // add to, and generally interact with the messages.
  update: function(data) {
    let lastMsgId = this._data[0]?.message_id || 0;

    for(let i = 99; i >= 0; i--) {
      if(data[i].message_id > lastMsgId) {
        Notifications.add(data[i].roomname);
        // data[i].seen = false;
        this._data.unshift(data[i]);
      }
    }
    // console.log(Messages._data);
  }
};