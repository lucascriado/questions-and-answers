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
  console.log(id, 'id')
  const postzao = await Post.findAll({ raw: true });
  res.render('create', { postzao: postzao });
})

router.get('/comment', async (req, res)=>{
  const comments = await Comment.findAll({ raw: true });
  console.log(id, 'comments')
  res.render('comment')
})

router.get('/welcome', authenticateJWT, async (req, res) => {
  if (req.user) {
    const id = req.user.userId;
    const uniqueUser = await User.findOne({ where: { id: id }, raw: true });
    const myPosts = await Post.findAll({ where: { userId: id }, raw: true });
    console.log(myPosts, 'myPosts', id, 'id')
    const posts = await Post.findAll({ raw: true });
    console.log(posts, 'postskshaskdjashdkjas')
    
    res.render('welcome', { username: uniqueUser.username, posts: posts, myPosts: myPosts});
  } else {
    res.redirect('/login');
  }
});

module.exports = router;