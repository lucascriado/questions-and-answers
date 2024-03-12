const express = require('express');
const bcrypt = require('bcrypt');
const router = express.Router();
const { authenticateJWT, jwt } = require('../auth/authToken');
const User = require('../db/tables/usersTable');
const Post = require('../db/tables/postTable');
const Comment = require('../db/tables/commentTable');

router.post('/register', async (req, res) => {
    const { username, password, avatar } = req.body;
    !password ? res.status(400).json({ message: 'Password is required' }) : null;
    const hashedPassword = await bcrypt.hash(password, 10);
    try {
        await User.create({ username, password: hashedPassword, avatar });
        res.redirect('/login');
    } catch (error) {
        res.status(500).json({ message: 'Error registering user', error });
    }
});

router.post('/login', async (req, res) => {
  const { username, password } = req.body;
  const user = await User.findOne({ where: { username } });
  const validPassword = await bcrypt.compare(password, user.password);

  !user ? res.status(404).json({ message: 'User not found' }) : null;
  !validPassword ? res.status(401).json({ message: 'Invalid password' }) : null;

  const token = jwt.sign({ userId: user.id }, 'your_jwt_secret');

  res.cookie('token', token, { httpOnly: true, secure: true });

  res.redirect('/welcome');
});

router.post('/registerPost', authenticateJWT, async (req, res) => {
    const { content, title } = req.body;
    const userId = req.user.userId;
    const id = req.user.userId;
    const uniqueUser = await User.findOne({ where: { id: id }, raw: true });
    const avatar = uniqueUser.avatar;
    try {
        await Post.create({ userId, avatar, title, content });
        res.status(201).json({ message: 'Post created' });
    } catch (error) {
        res.status(500).json({ message: 'Error creating post', error });
    }
});

router.post('/editPost/:id', authenticateJWT, async (req, res) => {
    const id = req.params.id;
    const userId = req.user.userId;
    const avatar = req.user.avatar;
    const { title, content } = req.body;
    
    try {
        const post = await Post.findOne({ where: { id: id, userId: userId } });
        if (!post) {
            return res.status(404).json({ message: 'Post not found' });
        }
        await post.update({ title, content });
        res.redirect('/welcome');
    } catch (error) {
        res.status(500).json({ message: 'Error updating post', error });
    }
});

router.post('/registerComment/:id', authenticateJWT, async (req, res) => {
    const id = req.params.id;
    const userId = req.user.userId;
    const { comment } = req.body;
    try {
        await Comment.create({ userId, postId: id, comment });
        res.status(201).json({ message: 'Comment created' });
    } catch (error) {
        console.log(error, 'error')
        res.status(500).json({ message: 'Error creating comment', error });
    }
})

module.exports = router;


