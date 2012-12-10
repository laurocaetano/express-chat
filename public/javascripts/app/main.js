var app = app || {};

(function() {
  app.init = function() {
    app.chat = new Chat();
    app.chat.setNickname();
    app.submitFormListener();
  }
  
  app.submitFormListener = function() {
    $('#chat-form').submit(function(e) {
      e.preventDefault();
    
      var message = $('#chat-input');
    
      if (message.val() === '') return;
      app.chat.sendMessage(message.val());
    
      $('.dl-horizontal').append('<dt>'+ app.nickname +'</dt><dd>'+ message.val() +'</dd>');
      message.val('');  
    });
  }
  
  app.init();
})();