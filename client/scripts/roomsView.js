// RoomsView is an object which controls the DOM elements
// responsible for displaying and selecting rooms.

var RoomsView = {

  $input: $('#rooms input'),
  $button: $('#rooms button'),
  $select: $('#rooms select'),

  alreadyAdded: [],

  initialize: function() {
    // TODO: Perform any work which needs to be done
    // when this view loads.
    this.$select.on('change', this.handleChange);
    this.$button.on('click', this.handleClick);

  },

  render: function() {
    // TODO: Render out the list of rooms.
    //loops through Rooms and add to dropdown
    let currentSelection = this.$select.val();
    this.$select.html('');
    for (let i = 0; i < Rooms._data.length; i++) {
      this.renderRoom(Rooms._data[i]);
    }
    this.$select.val(currentSelection);
  },

  renderRoom: function(roomname) {
    // TODO: Render out a single room.
    // filter Messages
    let template = _.template('<option value="<%-name%>"><%-name%></option>');
    let noXSSforUs = template({name: roomname});
    this.$select.append($(noXSSforUs));
  },

  handleChange: function(event) {
    // TODO: Handle a user selecting a different room.
    let roomname = this.value;
    Tabs.add(roomname);
    MessagesView.render(roomname);

  },

  handleClick: function(event) {
    // TODO: Handle the user clicking the "Add Room" button.
    let newRoomName = RoomsView.$input.val();
    Rooms.add(newRoomName);
    RoomsView.$select.val(newRoomName);
    RoomsView.renderRoom(newRoomName);

  }

};
