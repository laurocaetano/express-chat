exports.index = function(req, res){
  res.render('index', { title: 'Chat' });
};

exports.chat = function(client) {
  client.on('messages', function(message) {
    client.get('nickname', function(err, name) {
      client.broadcast.emit('messages', {message: message, nickname: name});
    });    
  });
  client.on('join', function(name) {
    client.set('nickname', name);
  });
};