const express = require('express');
const bcrypt = require('bcrypt');
const router = express.Router();
const { authenticateJWT, jwt } = require('../auth/authToken');
const User = require('../db/tables/usersTable');
const Post = require('../db/tables/postTable');

router.post('/register', async (req, res) => {
    const { username, password } = req.body;
    !password ? res.status(400).json({ message: 'Password is required' }) : null;
    const hashedPassword = await bcrypt.hash(password, 10);
    try {
        await User.create({ username, password: hashedPassword });
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
    const { usernome, avatar, content } = req.body;
    const userId = req.user.userId;

    try {
        await Post.create({ usernome, userId, avatar, content });
        res.status(201).json({ message: 'Post created' });
    } catch (error) {
        res.status(500).json({ message: 'Error creating post', error });
    }
});

module.exports = router;


