var express = require('express');
var path = require('path');
var app = express();
// for app in local apps folder, app.use(express.static(path.join(__dirname, 'apps/app/build')));

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.use('/', indexRouter);
app.use(express.static(path.join(__dirname, 'apps/jaydnserranofrontend/build')));
app.use(express.static(path.join(__dirname, 'apps/jaydnserranoadmin/build')));

// catch 404 and forward to error handler
app.use(function(req, res, next) {
  next(createError(404));
});
app.get('/admin', function(req, res) {
  console.log('Received request from: ' + req.socket.remoteAddress + ' for ' + req.url);
  res.sendFile(path.join(__dirname, 'jaydnserranoadmin/build', 'index.html'));
});
app.use('/', express.static(path.join(__dirname, 'jaydnserranofrontend/build')));
app.use('/admin', express.static(path.join(__dirname, 'jaydnserranoadmin/build')));
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
