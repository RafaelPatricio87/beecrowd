var input = require('fs').readFileSync('./stdin', 'utf8');
var lines = input.split('\n');

const dados = (lines[0].split(' ')).sort((a,b) => b -a)
const a =  Number(parseFloat(dados[0]))
const b =  Number(parseFloat(dados[1]))
const c =  Number(parseFloat(dados[2]))

if(a >= (b+c)){
    console.log('NAO FORMA TRIANGULO')
}else if((a*a) == (b*b) + (c*c)){
    console.log('TRIANGULO RETANGULO')
}else if((a*a) > (b*b) + (c*c)){
    console.log('TRIANGULO OBTUSANGULO')
}else if((a*a) < (b*b) + (c*c)){
    console.log('TRIANGULO ACUTANGULO')
}
if(a == b && b && c && c == a){
    console.log('TRIANGULO EQUILATERO')
}else if(a == b || b == c || c == a){
    console.log('TRIANGULO ISOSCELES')
}

