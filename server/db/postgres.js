var config = require('../config/settings.js');
var Sequelize = require('sequelize');
var sequelize;

var self = module.exports = {

    instanceSequelize : sequelize,

    initConnection: function () {
        
        self.instanceSequelize  = new Sequelize(config.postgress_config_dev);

        self.instanceSequelize
            .authenticate()
            .then(() => {
                console.log('Connection has been established successfully.');
            })
            .catch(err => {
                console.error('Unable to connect to the database:', err);
            });
    },

    models : {} 
}