const Sequelize = require('sequelize');

const connect = new Sequelize('questions', 'admin', '1337',{
    host: 'localhost',
    dialect: 'mysql', 
})

module.exports = connect;