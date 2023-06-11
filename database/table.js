const Sequelize = require('sequelize')
const connect = require('./database')

const createTable = connect.define('teste', {
    name: {
        type: Sequelize.STRING,
        allowNull: false
    },
    email: {
        type: Sequelize.STRING,
        allowNull: false
    }
});

createTable.sync({force: false}).then(() => {
    console.log('olha a tabelinha pronta eim')
})