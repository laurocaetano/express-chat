(function() {
  var chat = new Chat();
  
  $('#chat-form').submit(function(e) {
    e.preventDefault();
    var message = $('#chat-input');
    chat.sendMessage(message.val());
    $('#chat-messages').append(message.val() + '\n');
    message.val('');  
  });
})();