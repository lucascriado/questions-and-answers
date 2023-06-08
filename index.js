const express = require('express');
const app = express();

app.set('view engine', 'ejs');

app.get("/", function(req, res) {

  var produtos = [
    {nome: "Teste11", valor: 5.55},
    {nome1: "Teste22", valor: 7.35},
    {nome2: "Teste33", valor: 7.35}
  ]

  console.log(produtos)

  let produtosLista = JSON.stringify(produtos)

  let lang = 'teste123'

  res.render("index", {
    produtosLista: produtosLista,
    produtos: produtosLista,
    lang: lang,
    produtos: produtos
  });
});

app.listen(9090);


