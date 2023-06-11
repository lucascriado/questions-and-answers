/* modulos/bibliotecas instalados */
const express = require('express');
const app = express();
const bodyParser = require('body-parser')
const connect = require('./database/database')
const answer = require('./database/table')

connect
  .authenticate()
  .then(() => {
    console.log("conectou porra!")
  })
  .catch((msgErro) => {
    console.log(msgErro)
  })

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

  if (reqNome && reqEmail) {
    answer.create({
      name: reqNome,
      email: reqEmail
    })
    res.redirect("/perguntar");
  } else {
    console.log('alguma coisa deu errado')
  }

})

app.listen(9090);







