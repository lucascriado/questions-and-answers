const Sequelize = require('sequelize')
const connect = require('./database')

const createTable = connect.define('question', {
    name: {
        type: Sequelize.STRING,
        allowNull: false
    },
    question: {
        type: Sequelize.STRING,
        allowNull: false
    }
});

createTable.sync({force: false})

module.exports = createTable;