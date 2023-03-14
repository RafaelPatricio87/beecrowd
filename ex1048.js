const { Console } = require('console');

var input = require('fs').readFileSync('./stdin', 'utf8');
var lines = input.split('\n');

const dados = parseFloat(lines[0])
let newSalario = 0
let reajuste = 0
let percentual = 0

if(dados >= 0 && dados <= 400.00){
    reajuste = dados * 15 /100
    newSalario = dados + (dados * 15 /100)
    percentual = 15
}
if(dados >= 400.01 && dados <= 800.00){
    reajuste = dados * 12 /100
    newSalario = dados + (dados * 12 /100)
    percentual = 12
}
if(dados >= 800.01 && dados <= 1200.00){
    reajuste = dados * 10 /100
    newSalario = dados + (dados * 10 /100)
    percentual = 10
}
if(dados >= 1200.01 && dados <= 2000.00){
    reajuste = dados * 7 /100
    newSalario = dados + (dados * 7 /100)
    percentual = 7
}
if(dados > 2000.00){
    reajuste = dados * 4 /100
    newSalario = dados + (dados * 4 /100)
    percentual = 4
}
console.log(`Novo salario: ${newSalario.toFixed(2)}`)
console.log(`Reajuste ganho: ${reajuste.toFixed(2)}`)
console.log(`Em percentual: ${percentual} %`)
