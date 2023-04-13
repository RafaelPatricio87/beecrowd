var input = require('fs').readFileSync('./stdin', 'utf8');
var lines = input.split('\r\n');

let mes = parseFloat(lines)

const meses = ['January','February','March','April','May','June','July','August','September','October','November','December']
const resp = meses[mes-1]
console.log(resp)


