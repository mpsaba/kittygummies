module.exports = function (req, res, next) {

    console.log("jwt-token");
    var jwt = require('jsonwebtoken');
    var config = require('../config/settings');
    var token = (req.body && req.body.token) || (req.query && req.query.token) || req.headers['token'];

    
    console.log("jwt-token " + token);
    if (token) {

        jwt.verify(token, config.jwt_secret, function (err, decoded) {
            if (err) {
                res.status(401).json({ error: true, message: 'Failed to authenticate token.', errorReason: err });
            } else {

                req.token = token;
                req.decodedToken = decoded;
                next();
            }
        });

    } else {
        res.status(401).json({ error: true, message: "Missing token." });
    }





}





