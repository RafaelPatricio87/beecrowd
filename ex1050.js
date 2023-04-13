var input = require('fs').readFileSync('./stdin', 'utf8');
var lines = input.split('\r\n');

let ddd = Number(lines[0])

if(ddd == 61)console.log('Brasilia')
if(ddd == 71)console.log('Salvador')
if(ddd == 11)console.log('Sao Paulo')
if(ddd == 21)console.log('Rio de Janeiro')
if(ddd == 32)console.log('Juiz de Fora')
if(ddd == 19)console.log('Campinas')
if(ddd == 27)console.log('Vitoria')
if(ddd == 31)console.log('Belo Horizonte')

    
