const express = require('express');
const app = express();


app.get("/", function(req, res) {
  res.render('index');
});

// Agora você pode referenciar a variável x aqui ou em qualquer outro lugar fora da função de callback

app.listen(9090);


