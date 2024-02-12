const express = require('express');
const bcrypt = require('bcrypt');
const router = express.Router();
const { authenticateJWT, jwt } = require('../auth/authToken');
const User = require('../db/connectionData');

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

  // Se o login for bem-sucedido, crie um token JWT
  const token = jwt.sign({ userId: user.id }, 'your_jwt_secret');

  // Armazene o token JWT em um cookie seguro
  res.cookie('token', token, { httpOnly: true, secure: true });

  // Redirecione para /welcome
  res.redirect('/welcome');
});

module.exports = router;


