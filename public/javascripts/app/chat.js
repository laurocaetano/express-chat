Chat = function() {
  this.socket = io.connect('http://localhost:3000');
  this.listen();
}
  
Chat.prototype.sendMessage = function(message) {
  this.socket.emit('messages', message);
};
  
Chat.prototype.listen = function() {
  this.socket.on('messages', function(data) { 
    $('.dl-horizontal').append('<dt>nickname</dt><dd>'+ data +'</dd>');
  });
}