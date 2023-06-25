/* modulos/bibliotecas instalados */
const express = require('express');
const app = express();
const bodyparser = require('body-parser')
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

app.use(bodyparser.urlencoded({ extended: false }))
app.use(bodyparser.json())

app.post("/save", function (req, res) {
  var reqname = req.body.name;
  var reqtext = req.body.text;
  if (reqname && reqtext) {
    answer.create({
      name: reqname,
      email: reqtext
    })
    res.redirect("/");
  } else {
    console.log('alguma coisa deu errado')
  }
})

app.get("/", function (req, res) {
  answer.findAll({ raw: true }).then(prm => {
    res.render("index", {
      table: table
    })
  })
})

app.get("/user", function (req, res) {
  res.render("user")
})

app.listen(9090);







