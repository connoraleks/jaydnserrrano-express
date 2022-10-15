var express = require('express');
var router = express.Router();

/* GET admin page. */
router.get('/admin', function(req, res, next) {
    // send the index.html file from the apps/jaydnserranoadmin/build folder
    res.sendFile('index.html', { root: 'apps/jaydnserranoadmin/build' });
});

module.exports = router;
