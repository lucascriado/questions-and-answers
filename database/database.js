const Sequelize = require('sequelize');

const connect = new Sequelize('forms', 'root', '1337',{
    host: 'localhost',
    dialect: 'mysql'
})

module.exports = connect;