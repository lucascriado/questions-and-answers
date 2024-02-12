const Sequelize = require('sequelize');

const sequelize = new Sequelize('auth', 'admin', 'Password1!', {
    host: 'localhost',
    dialect: 'mysql',
    port: 3306
});

const User = sequelize.define('user', {
    username: {
        type: Sequelize.STRING,
        allowNull: false,
        unique: true
    },
    password: {
        type: Sequelize.STRING,
        allowNull: false
    }
});

User.sync({force: false});

module.exports = User;

