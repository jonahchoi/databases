
var Notifications = {
  store: {},

  render: function(roomName) {
    $(`[name="${roomName}"] .notification`).text(this.store[roomName]);
  },

  add: function(roomname) {
    if(this.store[roomname] === undefined) {
      this.store[roomname] = 1;
    } else {
      this.store[roomname]++;
    }
    this.render(roomname);
  },

  update: function(roomname) {
    this.store[roomname] = 0;
    this.render(roomname);
  },

  clear: function() {
    for (let key in this.store) {
      this.update(key);
    }
  }
}