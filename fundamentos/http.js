const http = require('http')

http.createServer(function(x,y){
    y.end('olá mundo!')
}).listen(3000);

console.log('Seu servidor está rodando!')

const express =  require('express')
const app = express();

app.get("/", function(req, res){
    res.send('olá MUNDOOO!')
})

app.get("/send/:randomvalue", function (req, res){
    let server = req.params.randomvalue
    console.log(server)
    /* http://127.0.0.1:3333/send/qualquercoiisa */
})

app.get("/send/", function(req, res){
    let bundle = req.query['let'];
    res.send('deu certo')
    /* http://127.0.0.1:3333/send?let=x */
    console.log(bundle)
})

app.listen(3333)