Chat = function() {
  this.socket = io.connect('http://localhost:3000');
  this.listen();
}

Chat.prototype.setNickname = function() {
  app.nickname = prompt('Nickname');
  this.socket.emit('join', app.nickname);
}
  
Chat.prototype.sendMessage = function(message) {
  this.socket.emit('messages', message);
};
  
Chat.prototype.listen = function() {
  this.socket.on('messages', function(data) { 
    $('.dl-horizontal').append('<dt>'+ data.nickname +'</dt><dd>'+ data.message +'</dd>');
  });
}