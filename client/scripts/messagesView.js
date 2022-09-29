// MessagesView is an object which controls the DOM elements
// responsible for displaying messages.

var MessagesView = {

  $chats: $('#chats'),

  initialize: function() {
    // TODO: Perform any work which needs to be done
    // when this view loads.
    this.$chats.html('');
  },

  render: function(roomName) {
    //Clear chats dom to make sure no repeats
    this.$chats.html('');
    // TODO: Render _all_ the messages.
    let messages;
    if (roomName) {
      messages = Messages._data.filter((message, i) => {
        if(message.roomname === roomName || (roomName === 'lobby' && message.roomname === null)) {
          // Messages._data[i].seen = true;
          return true;
        }
        return false;
      });
      Notifications.update(roomName);
    } else {
      messages = Messages._data
      Notifications.clear();
    }
    for (let i = 0 ; i < messages.length; i++) {
      // messages[i].seen = true;
      this.renderMessage(messages[i]);
    }
    // console.log('fake messages', messages);
  },

  renderMessage: function(message) {
    let newMessage = MessageView.render(message);
    let $newMessage = $(newMessage);
    if(Friends._data.includes(message.username)) {
      $newMessage.css({color: 'blue'});
    }
    $newMessage.on('click', (event) => {
      this.handleClick(event, message.username);
    });
    this.$chats.append($newMessage);
  },

  handleClick: function(event, friendName) {
    // TODO: handle a user clicking on a message
    // (this should add the sender to the user's friend list).
    Friends.toggleStatus(friendName);
  }

};