var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  console.log('index.js');
  // send the index.html file from the apps/build-jaydnserranofrontend folder
  res.sendFile('index.html', { root: 'apps/build-jaydnserranofrontend' });
});
router.get('/admin', function(req, res, next) {
  console.log('admin.js');
  // send the index.html file from the apps/build-jaydnserranoadmin folder
  res.sendFile('index.html', { root: 'apps/build-jaydnserranoadmin' });
});
module.exports = router;
