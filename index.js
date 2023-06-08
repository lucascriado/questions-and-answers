/* modulos/bibliotecas instalados */
const express = require('express');
const app = express();
var fs = require("fs");

/* importando o arquivo json para utilizar suas variaveis que foram exportadas para ele */
const data = require("./server.json");

/* como usar o ejs */
app.set('view engine', 'ejs');

/* abrindo uma rota */
app.get("/", function(req, res) {
  
  var produtos = [
    {nome: "Teste11", valor: 5.55},
    {nome1: "Teste22", valor: 7.35},
    {nome2: "Teste33", valor: 7.35}
  ]

  /* trasnformando uma array para string */ 
  let listaProdutos = JSON.stringify(produtos)

  /* renderizando uma pagina */
  res.render("index", {
    /* renderizando os arquivos no ejs */
    listaProdutos: listaProdutos,
    produtos: produtos 
  });
});

app.get('/:nome', function(req, res){
  let nome = req.params.nome
  
  /* só vai executar o json se abrir na pagina /nome */
  if(nome === 'nome'){
    res.render("app")
    
    /* variavel que vamos exportar */
    var variavel = {"name":"sei la to testando ainda ainda ainda ainda 2023",};
    
    /* exportando a variavel */
    fs.writeFile("./text.json", JSON.stringify(variavel, null, 4), (err) => {
        if (err) {  console.error(err);  return; };
        console.log("File has been created");
    });
  } else {
    console.log('não deu certo')
  }
})

app.listen(9090);

/* chamando a variavel que foi criada automaticamente no json, e retornando ela fora da função */
console.log(data)