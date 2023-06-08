
/* ----- principal ----- */

/* modulos/bibliotecas instalados */
const express = require('express');
const app = express();
var fs = require("fs");

/* importando o arquivo json para utilizar suas variaveis que foram exportadas para ele */
const data = require("./json.json");

/* como usar o ejs */
app.set('view engine', 'ejs');

/* usando os arquivos estaticos */
app.use(express.static('public'));

/* abrindo uma rota */
app.get("/", function(req, res) {
  
  var produtos = [
    {nome: "Teste11", valor: 5.55},
    {nome1: "Teste22", valor: 7.35},
    {nome2: "Teste33", valor: 7.35}
  ]

  /* criando uma variavel para exportar para o ejs */
  let lang = "isso é um teste!"

  /* trasnformando uma array para string */ 
  let listaProdutos = JSON.stringify(produtos)

  /* renderizando uma pagina */
  res.render("index", {
    /* renderizando os arquivos no ejs */
    listaProdutos: listaProdutos,
    produtos: produtos, 
    lang: lang
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

/* ----- base ----- */

const express =  require('express')
const app1 = express();

app1.get("/", function(req, res){
    res.send('olá MUNDOOO!')
})

app1.get("/send/:randomvalue", function (req, res){
    let server = req.params.randomvalue
    console.log(server)
    /* http://127.0.0.1:3333/send/qualquercoiisa */
})

app1.get("/send/", function(req, res){
    let bundle = req.query['let'];
    res.send('deu certo')
    /* http://127.0.0.1:3333/send?let=x */
    console.log(bundle)
})

app1.listen(3333)

/* ----- modulos para exportar ----- */

const myFuctions = require('./app.js')

resExp = myFuctions.Div(20, 20)
resExp2 = myFuctions.Multi(20, 20)
resExp3 = myFuctions.Sum(20, 20)
resExp4 = myFuctions.Sub(20, 20)

console.log(resExp)
console.log(resExp2)
console.log(resExp3)
console.log(resExp4)

