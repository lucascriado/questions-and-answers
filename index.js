/* modulos/bibliotecas instalados */
const express = require('express');
const app = express();
const bodyParser = require('body-parser')

/* como usar o ejs */
app.set('view engine', 'ejs');

/* usando os arquivos estaticos */
app.use(express.static('public'));

app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json())

app.get("/perguntar", function (req, res) {
  res.render("question")
})

app.post("/salvar", function (req, res) {
  res.send("formulário recebido!")
  var reqNome = req.body.nome;
  var reqEmail = req.body.email;
  console.log(reqEmail + reqNome)
})

app.listen(9090);







