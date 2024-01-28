const Sequelize = require('sequelize');

const connect = new Sequelize('questions', 'admin', 'Password1!',{
    host: 'localhost',
    dialect: 'mysql', 
    port: 3306,
    user: 'admin',
    password: 'Password1!'
})

module.exports = connect;

// CREATE DATABASE questions;
// CREATE USER 'admin'@'localhost' IDENTIFIED BY 'Password1!';
// GRANT ALL ON questions.* TO 'admin'@'localhost';
// FLUSH PRIVILEGES;