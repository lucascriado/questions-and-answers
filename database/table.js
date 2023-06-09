const Sequelize = require('sequelize')
const connect = require('./database')

const createTable = connect.define('teste12', {
    name: {
        type: Sequelize.STRING,
        allowNull: false
    },
    email: {
        type: Sequelize.STRING,
        allowNull: false
    }
});

createTable.sync({force: false})

module.exports = createTable;