var showSite = false
const site = "www.google.com"

console.log("Hello World")
console.log("Meu nome é Lucas!")

if(!showSite){
    console.log(site)
}

function Sum(a, b){
    return a+b
}

function Sub(a, b){
    return a-b
}

function Multi(a, b){
    return a*b
}

function Div(a, b){
    return a/b
}

ResultadoDiv = Div(30, 10)
ResultadoSub = Sub(30, 10)
ResultadoSum = Sum(30, 10)
ResultadoMulti = Multi(30, 10)

console.log(ResultadoDiv, ResultadoMulti, ResultadoSub, ResultadoSum)

module.exports = {
    Multi,
    Sum,
    Div,
    Sub
};

