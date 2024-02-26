const { sequelize, Sequelize } = require('../connectionData');

const Comment = sequelize.define('comment', {
    userId: {
        type: Sequelize.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },
    postId: {
        type: Sequelize.STRING,
        allowNull: false
    },
    content: {
        type: Sequelize.STRING,
        allowNull: false
    }
});

Comment.sync({force: false});

module.exports = Comment;