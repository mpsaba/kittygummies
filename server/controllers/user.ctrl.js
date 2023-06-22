var config = require('../config/settings');
var db = require('../db/postgres.js');
var utils = require('../utils/common.util.js');

var ERROR_CODES = {

    GENERIC_CATCH: {
        CODE: '9999',
        DESCRIPTION: 'Error : '
    },

    DUPLICATE_CATCH: {
        CODE: '0001',
        DESCRIPTION: 'User information already exist.'
    },

    DELETE_RESTRICTED: {
        CODE: '0002',
        DESCRIPTION: 'Delete restricted. Reference to this was found on other records.'
    },

    DUPLICATE_PIN_CATCH: {
        CODE: '0001',
        DESCRIPTION: 'Pin code already exist.'
    }

}

module.exports = {

    all: function (req, res, next) {

        db.models.User.findAll({
            order: [
                ['updatedAt', 'desc']
            ]
        }).then(users => {

            res.json({
                error: false,
                message: users
            });


        }).catch(error => {

            console.log(error);

            res.json({
                error: true,
                message: {
                    module: "users.all().find()",
                    code: ERROR_CODES.GENERIC_CATCH.CODE,
                    message: ERROR_CODES.GENERIC_CATCH.DESCRIPTION + JSON.stringify(error)
                }
            });
        });


    },


}






