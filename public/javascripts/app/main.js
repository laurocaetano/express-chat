(function() {
  var chat = new Chat();
  
  $('#chat-form').submit(function(e) {
    e.preventDefault();
    
    var message = $('#chat-input');
    
    if (message.val() === '') return;
    chat.sendMessage(message.val());
    
    $('.dl-horizontal').append('<dt>nickname</dt><dd>'+ message.val() +'</dd>');
    message.val('');  
  });
})();