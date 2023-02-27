var input = require('fs').readFileSync('./stdin', 'utf8');
var lines = input.split('\n');

const dados = lines[0].split(' ')
let antes = [...dados]
antes.sort((a, b) => a - b)
antes.forEach((e) => console.log(e))
console.log('')
dados.forEach((el) => console.log(el))
