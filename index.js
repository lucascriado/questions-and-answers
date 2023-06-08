const express = require('express');
const app = express();

app.set('view engine', 'ejs');

app.get("/:teste2", function(req, res) {
  let server2 = req.params.teste2
  res.render('index', {
    lang: server2
  });
});

app.listen(9090);


