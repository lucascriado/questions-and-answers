const express = require('express');
const bcrypt = require('bcrypt');
const router = express.Router();
const { authenticateJWT, jwt } = require('../auth/authToken');
const User = require('../db/tables/usersTable');
const Post = require('../db/tables/postTable');

router.put('/editPost/:id', authenticateJWT, async (req, res) => {
    const id = req.params.id;
    const userId = req.user.userId;
    const { content } = req.body;
    try {
        const post = await Post.findOne({ where: { id: id, userId: userId } });
        if (!post) {
            return res.status(404).json({ message: 'Post not found' });
        }
        await post.update({ content });
        res.redirect('/welcome');
    } catch (error) {
        res.status(500).json({ message: 'Error updating post', error });
    }
});

router.put('/editComment/:id', authenticateJWT, async (req, res) => {
    const id = req.params.id;
    const userId = req.user.userId;
    const { comment } = req.body;
    try {
        const hasComment = await Comment.findOne({ where: { id: id, userId: userId } });
        if (!hasComment) {
            return res.status(404).json({ message: 'Comment not found' });
        }
        await comment.update({ comment });
        res.redirect('/welcome');
    } catch (error) {
        res.status(500).json({ message: 'Error updating comment', error });
    }
});

module.exports = router;
