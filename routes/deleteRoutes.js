const express = require('express');
const bcrypt = require('bcrypt');
const router = express.Router();
const { authenticateJWT, jwt } = require('../auth/authToken');
const User = require('../db/tables/usersTable');
const Post = require('../db/tables/postTable');

router.delete('/deletePost/:id', authenticateJWT, async (req, res) => {
    const id = req.params.id;
    const userId = req.user.userId;
    try {
        const post = await Post.findOne({ where: { id: id, userId: userId } });
        if (!post) {
            return res.status(404).json({ message: 'Post not found' });
        }
        await post.destroy();
        res.redirect('/welcome');
    } catch (error) {
        res.status(500).json({ message: 'Error deleting post', error });
    }
});

router.delete('/deleteComment/:id', authenticateJWT, async (req, res) => {
    const id = req.params.id;
    const userId = req.user.userId;
    try {
        const comment = await Comment.findOne({ where: { id: id, userId: userId } });
        if (!comment) {
            return res.status(404).json({ message: 'Comment not found' });
        }
        await comment.destroy();
        res.redirect('/welcome');
    } catch (error) {
        res.status(500).json({ message: 'Error deleting comment', error });
    }
});

module.exports = router;
