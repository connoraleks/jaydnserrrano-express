var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  console.log('index.js');
  // send the index.html file from the apps/jaydnserranofrontendbuild folder
  res.sendFile('index.html', { root: 'apps/jaydnserranofrontendbuild' });
});
router.get('/admin', function(req, res, next) {
  console.log('admin.js');
  // send the index.html file from the apps/jaydnserranofrontendbuild folder
  res.sendFile('index.html', { root: 'apps/jaydnserranoadminbuild' });
});
module.exports = router;
