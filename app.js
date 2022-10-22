var express = require('express');
var path = require('path');
var app = express();
app.get('/', function(req, res) {
  console.log('Received request from: ' + req.socket.remoteAddress + ' for ' + req.url);
  res.sendFile(path.join(__dirname, 'jaydnserranofrontend/build', 'index.html'));
});
app.get('/admin', function(req, res) {
  console.log('Received request from: ' + req.socket.remoteAddress + ' for ' + req.url);
  res.sendFile(path.join(__dirname, 'jaydnserranoadmin/build', 'index.html'));
});
app.use(express.static(path.join(__dirname, 'jaydnserranofrontend/build')));
app.use(express.static(path.join(__dirname, 'jaydnserranoadmin/build')));
// error handler
app.use(function(err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.json({error: err});
});

module.exports = app;
