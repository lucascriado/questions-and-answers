const express =  require('express')
const app = express();

app.get("/", function(req, res){
    res.send('olá MUNDOOO!')
})

app.listen(3333)
