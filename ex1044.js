var input = require('fs').readFileSync('./stdin', 'utf8');
var lines = input.split('\n');

const dados = lines[0].split(' ')
const A = Number(dados[0])
const B = Number(dados[1])

if(A%B == 0 || B%A == 0){
    console.log('Sao Multiplos')
}else{
    console.log('Nao sao Multiplos')
}
