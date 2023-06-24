const Sequelize = require('sequelize');

const connect = new Sequelize('teste12', 'root', '1337',{
    host: 'localhost',
    dialect: 'mysql', 
})

module.exports = connect;