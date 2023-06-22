var db = require('../db/postgres.js');
var Sequelize = require('sequelize');

module.exports = db.instanceSequelize.define('cacayan_user', {

    id: {
        type: Sequelize.BIGINT,
        primaryKey: true,
        autoIncrement: true,
        allowNull: false
    },

    username: {
        type: Sequelize.STRING,
        required: true,
        unique: true
    },

    fullname: {
        type: Sequelize.STRING,
        required: true
    },

    password: {
        type: Sequelize.STRING,
        required: true
    },

    contactNo: {
        type: Sequelize.STRING,
    },

    address: {
        type: Sequelize.STRING,
    },

    hireDate: {
        type: Sequelize.DATE,
    },

    isActive: {
        type: Sequelize.BOOLEAN,
        defaultValue: true
    },
   
    roleId : {
        type: Sequelize.BIGINT
    }

});








