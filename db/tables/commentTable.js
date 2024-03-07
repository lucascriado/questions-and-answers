const { sequelize, Sequelize } = require('../connectionData');

const Comment = sequelize.define('comment', {
    userId: {
        type: Sequelize.STRING,
        allowNull: false
    },
    postId: {
        type: Sequelize.STRING,
        allowNull: false
    },
    comment: {
        type: Sequelize.STRING,
        allowNull: false
    }
});

Comment.sync({force: false});

module.exports = Comment;