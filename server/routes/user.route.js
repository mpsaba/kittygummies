var controller = require('../controllers/user.ctrl');
var express = require('express'),
    router = express.Router();
var validateToken = require('../middlewares/jwt-token.js');


router.get('/all', function (req, res, next) {

    console.log("users route all");
    console.log(req);
    controller.all(req, res, next);

});



module.exports = router;






