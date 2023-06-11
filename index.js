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



app.get("/question", function (req, res) {
  res.render("question")
})

app.listen(9090);







