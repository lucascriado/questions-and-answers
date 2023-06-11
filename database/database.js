const Sequelize = require('sequelize');

const connect = new Sequelize('forms', 'root', '1337',{
    host: 'localhost',
    dialect: 'mysql', 
    port: 3306
})

module.exports = connect;