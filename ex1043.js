var input = require('fs').readFileSync('./stdin', 'utf8');
var lines = input.split('\n');

const dados = lines[0].split(' ')
const a =  Number(parseFloat(dados[0]))
const b =  Number(parseFloat(dados[1]))
const c =  Number(parseFloat(dados[2]))

if((a+b > c) && (b+c > a) && (a+c > b)){
    console.log(`Perimetro = ${(a+b+c).toFixed(1)}`)
}else {
    console.log(`Area = ${((a+b) * c/2).toFixed(1)}`)
}