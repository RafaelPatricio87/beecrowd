var input = require('fs').readFileSync('./stdin', 'utf8');
var lines = input.split('\n');

const dados = lines[0].split(' ')
const a =  Number(parseFloat(dados[0]))
const b =  Number(parseFloat(dados[1]))
let time = 0
if(a == b){
    time = 24
}else if(a < b){
    time = b - a
}else if(a > b){
    time = (24 - a )+ b
}
console.log(`O JOGO DUROU ${time} HORA(S)`)