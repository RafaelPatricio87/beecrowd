const { match } = require('assert');
const { listenerCount } = require('process');

var input = require('fs').readFileSync('./stdin', 'utf8');
var lines = input.split('\n');

let pares = 0
for(let i = 0 ; i < lines.length;i++){
    let num = parseInt(lines[i])
    if(num%2 == 0){
        pares++
    }
}
console.log(pares+' valores pares')