exports.index = function(req, res){
  res.render('index', { title: 'Chat' });
};

exports.chat = function(client) {
  client.on('messages', function(data) {
    var message = data;
    client.broadcast.emit('messages', message);
  });
};