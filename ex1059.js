var input = require('fs').readFileSync('./stdin', 'utf8');
var lines = input.split('\r\n');

let mes = parseFloat(lines)

for(let i = 1 ; i <= 100; i++){
    if(i % 2 == 0){
        console.log(i)
    }
}


