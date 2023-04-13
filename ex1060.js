var input = require('fs').readFileSync('./stdin', 'utf8');
var lines = input.split('\r\n');

let positivos = 0

for(let i = 0; i < lines.length;i++){
    if(parseFloat(lines[i]) >= 0){
        positivos++
    }
}
console.log(`${positivos} valores positivos`)
