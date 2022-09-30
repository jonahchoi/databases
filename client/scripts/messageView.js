var MessageView = {

  render: _.template(`
      <!--

      -->
      <div class="chat">
        <div
          class="username <%= Friends.isFriend(user_id) ? 'friend' : '' %>"
          data-username="<%- user_id %>">
          <%- user_id %>
        </div>
        <div><%- message %></div>
      </div>
      <!--
            -->
    `)

};
