const express = require('express');
const bodyParser = require('body-parser');
const app = express();
const path = require('path');
const getRoutes = require('./routes/getRoutes');
const postRoutes = require('./routes/postRoutes');
const cookieParser = require('cookie-parser');

app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use(cookieParser());

app.use('/', getRoutes);
app.use('/', postRoutes);

app.listen(9090);