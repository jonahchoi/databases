

var TabsView = {

  $tabs: $('#tabs'),


  initialize: function() {

  },

  renderTab: function(tab) {
    this.$tabs.append(tab);
  },

  handleClick: function() {
    let roomName = $(this).attr('name');
    RoomsView.$select.val(roomName);
    MessagesView.render(roomName);
  },

  handleClose: function(event) {
    if (event.stopPropagation) event.stopPropagation();

    console.log('inner div event')
    //get parent tab div
    let parentTab = $(this).parent();
    let currentRoomName = parentTab.attr('name');
    let currentIdx = Tabs._data.indexOf(currentRoomName);
    let nextRoomName;
    if(currentIdx === Tabs._data.length - 1) {
      nextRoomName = Tabs._data[currentIdx - 1];
    } else {
      nextRoomName = Tabs._data[currentIdx + 1];
    }
    Tabs._data.splice(currentIdx, 1);
    RoomsView.$select.val(nextRoomName);
    MessagesView.render(nextRoomName);
    parentTab.remove();

    //Search through Tabs comtainer for div with correct name
    // TabsView.$tabs.children(`[name="${currentRoomName}"]`)
    //delete the tab from children
  }

};