var db = require('../db/postgres.js');
var Sequelize = require('sequelize');

module.exports = db.instanceSequelize.define('role', {

    id: {
        type: Sequelize.BIGINT,
        primaryKey: true,
        autoIncrement: true,
        allowNull: false
    },

    roleCode: {
        type: Sequelize.STRING,
        required: true,
        unique: true
    },

    roleName: {
        type: Sequelize.STRING,
        required: true
    },

    allowTransaction: {
        type: Sequelize.BOOLEAN,
        defaultValue: true
    },

    allowContentManagement: {
        type: Sequelize.BOOLEAN,
        defaultValue: true
    },

    allowAdmin: {
        type: Sequelize.BOOLEAN,
        defaultValue: true
    }

});








