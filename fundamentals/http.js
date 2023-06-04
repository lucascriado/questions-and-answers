const http = require('http')

http.createServer(function(x,y){
    y.end('olá mundo!')
}).listen(3000);

console.log('Seu servidor está rodando!')