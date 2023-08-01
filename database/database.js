const Sequelize = require('sequelize');

const connect = new Sequelize('question', 'root', '1337',{
    host: 'localhost',
    dialect: 'mysql', 
})

module.exports = connect;