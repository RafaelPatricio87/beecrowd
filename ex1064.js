const { match } = require('assert');

var input = require('fs').readFileSync('./stdin', 'utf8');
var lines = input.split('\n');

let total = 0
let positivos = 0
for(let i = 0; i < lines.length; i++){
    let num = parseFloat(lines[i])
    if(num > 0){
        positivos++
        total += num
    }
}
console.log(positivos+' valores positivos')
console.log((total/positivos).toFixed(1))