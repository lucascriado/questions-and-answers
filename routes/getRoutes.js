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
    // Se o usuário estiver autenticado, renderize a página de boas-vindas
    if (req.user) {
    //   const usernameId = req.user.userId;
    //   const user = await User.findOne({ where: { usernameId } });
      
      
      res.render('welcome');
    } else {
      // Se o usuário não estiver autenticado, redirecione-o para a página de login
      res.redirect('/login');
    }
  });

module.exports = router;