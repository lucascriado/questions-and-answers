const express = require('express');
const router = express.Router();
const { authenticateJWT, jwt } = require('../auth/authToken');
const User = require('../db/connectionData');

router.get('/login', (req, res) => {
    res.render('login');
});

router.get('/register', (req, res) => {
    res.render('register');
});

router.get('/welcome', authenticateJWT, async (req, res) => {
  if (req.user) {
    const id = req.user.userId;
    const uniqueUser = await User.findOne({ where: { id: id }, raw: true });
    
    res.render('welcome', { username: uniqueUser.username });
  } else {
    res.redirect('/login');
  }
});

module.exports = router;