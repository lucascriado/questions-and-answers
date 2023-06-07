const express = require('express');
const app = express();

app.set('view engine', 'ejs');

app.get("/", function(req, res) {
  var name = 'Lucas'
  var lang = 'JavaScript'
  res.render('index');
});


app.listen(9090);


