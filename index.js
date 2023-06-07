const express = require('express');
const app = express();

app.set('view engine', 'ejs');

app.get("/:teste1/:teste2", function(req, res) {
  let server1 = req.params.teste1
  let server2 = req.params.teste2
  res.render('index', {
    name: server1,
    lang: server2
  });
});


app.listen(9090);


