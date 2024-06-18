const { sequelize, Sequelize } = require('../connectionData');

const Comment = sequelize.define('comment', {
    userId: {
        type: Sequelize.INTEGER,  // Certifique-se de que os tipos são consistentes
        allowNull: false
    },
    postId: {
        type: Sequelize.INTEGER,  // Certifique-se de que os tipos são consistentes
        allowNull: false
    },
    comment: {
        type: Sequelize.STRING,
        allowNull: false
    }
});

Comment.sync({ force: false });  // Remova force: false se não quiser sobrescrever a tabela

module.exports = Comment;
