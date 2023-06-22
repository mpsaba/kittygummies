var controller = require('../controllers/security.ctrl');
var express = require('express'),
    router = express.Router();
var validateToken = require('../middlewares/jwt-token.js');

router.get('/login', function (req, res, next) {
    controller.login(req, res, next);
});

module.exports = router;




