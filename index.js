const express =  require('express')
const app = express();

app.get("/", function(req, res){
    res.send('olá MUNDOOO!')
})

app.get("/send/:randomvalue", function (req, res){
    let server = req.params.randomvalue
    console.log(server)
})

app.get("/send/", function(req, res){
    let bundle = req.query['let'];
    res.send('deu certo')
    /* http://127.0.0.1:3333/send?let=x */
    console.log(bundle)
})

app.listen(3333)


