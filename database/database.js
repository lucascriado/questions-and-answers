const Sequelize = require('sequelize');

const connect = new Sequelize('forms', 'lucascriado', '1337',{
    host: 'localhost',
    dialect: 'mysql', 
})

module.exports = connect;