const { sequelize, Sequelize } = require('../connectionData');

const Post = sequelize.define('post', {
    userId: {
        type: Sequelize.STRING,
        allowNull: false
    },
    avatar: {
        type: Sequelize.STRING,
        allowNull: false
    },
    content: {
        type: Sequelize.STRING,
        allowNull: false
    }
});

Post.sync({force: false});

module.exports = Post;