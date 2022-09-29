
var Tabs = {
  _data: [],
  currentIdx: 0,
  unreadMessages: 0,
  add: function(roomName) {
    if(this._data.includes(roomName)){
      return;
    }
    let closeButton = $('<button class="closeButton">x</button>');
    closeButton.on('click', TabsView.handleClose);
    let temp = _.template(`<div class="tab" name="${roomName}">
      <div class=tabname><%-roomName%></div>
      <div class=notification></div>
    </div>`);
    let newTab = temp({roomName});
    let $newTab = $(newTab).append(closeButton);
    $newTab.on('click', TabsView.handleClick);
    this._data.push(roomName);
    TabsView.renderTab($newTab);
  },

  delete: function() {

  }
};