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
  try {
      const posts = await Post.findAll();
      const comments = await Comment.findAll();
      const id = req.user.userId; // Id do usuário autenticado
      res.render('welcome', { posts, comments, id }); // Passando os dados para a view
  } catch (error) {
      res.status(500).json({ message: 'Error loading posts or comments', error });
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

// new routes

router.get('/newRegister', (req, res) => {
  res.render('newRegister');
})

router.get('/newLogin', (req, res) => {
  res.render('newLogin');
})

router.get('/newWelcome', (req, res) => {
  res.render('newWelcome');
})

module.exports = router;