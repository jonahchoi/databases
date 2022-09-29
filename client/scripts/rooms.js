// This object houses all the room _data_ for the app.
// Treat it like a data structure - add methods to interact
// with and manipulate the data.

var Rooms = {

  // TODO: Define how you want to store the list of rooms
  _data: [],

  // TODO: Define methods which allow you to add rooms, update the list,
  // mark a room as selected, etc.
  add: function(roomName) {
    if(!this._data.includes(roomName) && roomName !== null) {
      this._data.push(roomName);
      RoomsView.render();
    }
  },

  update: function(data) {
    data.forEach((msg) => {
      this.add(msg.roomname);
    })
    // console.log(this._data);
  }


  update: function(data) {
    data.forEach((msg) => {
      if(!this._data.includes(msg.roomname) && msg.roomname !== null) {
        this.add(msg);
      }
    })
  }
};