const express = require('express');
const router = express.Router();
const { authenticateJWT, jwt } = require('../auth/authToken');
const User = require('../db/tables/usersTable');
const Comment = require('../db/tables/commentTable'); 
const Post = require('../db/tables/postTable');

router.get('/login', (req, res) => {
    res.render('login');
});

router.get('/register', (req, res) => {
  res.render('register');
});

router.get('/postzao', authenticateJWT, async (req, res) => {
  const id = req.user.userId;
  const postzao = await Post.findAll({ raw: true });
  res.render('create', { postzao: postzao });
})

router.get('/comment', async (req, res)=>{
  const comments = await Comment.findAll({ raw: true });
  res.render('comment')
})

router.get('/welcome', authenticateJWT, async (req, res) => {
  if (req.user) {
    const id = req.user.userId;
    const uniqueUser = await User.findOne({ where: { id: id }, raw: true });
    const myPosts = await Post.findAll({ where: { userId: id }, raw: true });
    const posts = await Post.findAll({ raw: true });
    const comments = await Comment.findAll({ limit: 3, raw: true });
    res.render('welcome', { username: uniqueUser.username, posts: posts, myPosts: myPosts, comments: comments, id: id });
  } else {
    res.redirect('/login');
  }
});

router.get('/editPost/:id', authenticateJWT, async (req, res) => {
  const id = req.params.id;
  const userId = req.user.userId;
  const post = await Post.findOne({ where: { id: id, userId: userId }, raw: true });
  if (!post) {
      return res.status(404).json({ message: 'Post not found' });
  }
  res.render('editPost', { post: post });
});

module.exports = router;