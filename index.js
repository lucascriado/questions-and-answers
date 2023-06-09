/* modulos/bibliotecas instalados */
const express = require('express');
const app = express();

/* como usar o ejs */
app.set('view engine', 'ejs');

/* usando os arquivos estaticos */
app.use(express.static('public'));

/* abrindo uma rota */
app.get("/", function(req, res) {
  /* renderizando uma pagina */
  res.render("index");
});

app.get("/perguntar", function(req, res){
  res.render("question")
})

app.listen(9090);

