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
app.use(express.static('public'), bodyparser.urlencoded({ extended: false }), bodyparser.json());

app.post("/save", function (req, res) {
  var reqname = req.body.name;
  var reqtext = req.body.text;
  console.log(reqname, reqtext)
  if (reqname && reqtext) {
    answer.create({
      name: reqname,
      question: reqtext
    })
    res.redirect("/community");
  } else {
    console.log('alguma coisa deu errado')
  }
})

app.get("/community", function (req, res) {
  answer.findAll({ raw: true }).then(prm => {
    res.render("community", { data: prm })
  })
})

app.get("/community/:id", function (req, res) {
  answer.findOne({ where: { id: req.params.id } }).then(prm => {
    res.render("question", { data: prm })
  })
})

app.listen(9090);







