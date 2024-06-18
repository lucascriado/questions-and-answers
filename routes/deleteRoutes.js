const express = require('express');
const router = express.Router();
const { authenticateJWT } = require('../auth/authToken');
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
        res.status(200).json({ message: 'Post deleted successfully' });
    } catch (error) {
        res.status(500).json({ message: 'Error deleting post', error });
    }
});

module.exports = router;
