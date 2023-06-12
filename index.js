/* modulos/bibliotecas instalados */
const express = require('express');
const app = express();
const bodyParser = require('body-parser')
const connect = require('./database/database')
const answer = require('./database/table')

connect
  .authenticate()
  .then(() => {
    console.log("conectou a db!")
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

app.post("/save", function (req, res) {
  var reqName = req.body.name;
  var reqEmail = req.body.email;
  if (reqName && reqEmail) {
    answer.create({
      name: reqName,
      email: reqEmail
    })
    res.redirect("/");
  } else {
    console.log('alguma coisa deu errado')
  }
})

app.get("/", function (req, res) {
  answer.findAll({ raw: true }).then(prm => {
    res.render("list", {
      table : prm
    })
  })
})

app.get("/question", function (req, res) {
  res.render("question")
})

app.listen(9090);







