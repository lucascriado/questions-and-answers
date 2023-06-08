const express = require('express');
const app = express();
var fs = require("fs");
const data = require("./text.json");
console.log(data)

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

app.get('/:nome', function(req, res){
  let nome = req.params.nome
  if(nome === 'nome'){
    res.render("app")
    var sampleObject = {"name":"sei la to testando ainda ainda ainda ainda 2023",};
    fs.writeFile("./text.json", JSON.stringify(sampleObject, null, 4), (err) => {
        if (err) {  console.error(err);  return; };
        console.log("File has been created");
    });
  } else {
    console.log('não deu certo')
  }
})



app.listen(9090);


