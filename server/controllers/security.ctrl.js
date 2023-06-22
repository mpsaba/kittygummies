config = require('../config/settings');
var crypto = require('crypto');
var jwt = require('jsonwebtoken');
var db = require('../db/postgres.js');
var utils = require('../utils/common.util.js');
const uuid = require('uuid');

const tokenExpiry = 60 * 60 * 24;

var ERROR_CODES = {

    INVALID_CAPTCHA: {
        CODE: '0001',
        DESCRIPTION: 'Invalid Captcha Code'
    },

    USER_EXIST: {
        CODE: '0002',
        DESCRIPTION: 'User already exist.'
    },

    USER_PASSWORD_DO_NOT_MATCH: {
        CODE: '0003',
        DESCRIPTION: 'User name and password do not match.'
    },

    LOGIN_FAILED: {
        CODE: '0004',
        DESCRIPTION: 'Invalid username or password.'
    },

    USER_NOT_EXIST: {
        CODE: '0005',
        DESCRIPTION: 'User does not exist.'
    },


    GENERIC_CATCH: {
        CODE: '9999',
        DESCRIPTION: 'Error : '
    }

}

module.exports = {

    login: function (req, res, next) {

        var reqFields = [
            "username",
            "password"
        ];

        utils.checkRequiredFields(req, res, reqFields, function (result) {

            var params = result.data;
            var encPassword = crypto.createHash('md5').update(params.password + config.password_secret).digest("hex");

            db.models.User.findOne({
                where: {
                    username: params.username,
                    password: encPassword
                }
            }).then(user => {

                if (user) {
                    
                    var serverKey = uuid.v4();
                    var routes = utils.encryptedEndPoints(serverKey);
                    var accessCode = Math.floor(Math.random() * 900000) + 100000;

                    var tokenPayload = {
                        _id: user.id,
                        accessCode: accessCode,
                        flow: 'VERIFIED-FLOW',
                        serverKey: serverKey
                    }

                    var token = jwt.sign(tokenPayload, config.jwt_secret, {
                        expiresIn: tokenExpiry
                    });

                        var encMessage = {
                            id: user.id,
                            username: user.username,
                            fullname: user.fullname,
                            role: user.role,
                            token: token,
                            routes: routes
                        }
            
                        res.json({
                            error: false,
                            message: encMessage
                        });

                } else {

                    res.json({
                        error: true,
                        message: {
                            module: "user.login().user-does-exist",
                            code: ERROR_CODES.LOGIN_FAILED.CODE,
                            message: ERROR_CODES.LOGIN_FAILED.DESCRIPTION
                        }
                    });
                }

            }).catch(error => {

                console.log(error);
                res.json({
                    error: true,
                    message: {
                        module: "user.login().find()",
                        code: ERROR_CODES.GENERIC_CATCH.CODE,
                        message: ERROR_CODES.GENERIC_CATCH.DESCRIPTION + JSON.stringify(error)
                    }
                });
            });
        });

    },

    endpoints : function (req, res, next) {

        var login = utils.encryptWithPrivateKey("/api/security/login", app.get('RSA_PRI_KEY'));
        var loginByToken = utils.encryptWithPrivateKey("/api/security/loginByToken", app.get('RSA_PRI_KEY'));

        var routes = {
            login : login,
            loginByToken: loginByToken
        }

        res.json ({
            error : false,
            routes: routes,
            publicKey: app.get('RSA_PUB_KEY')
        });
    
    }

}





