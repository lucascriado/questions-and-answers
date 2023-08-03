const Sequelize = require('sequelize');

const connect = new Sequelize('questions', 'lucascriado', '!861Venus',{
    host: 'localhost',
    dialect: 'mysql', 
})

module.exports = connect;