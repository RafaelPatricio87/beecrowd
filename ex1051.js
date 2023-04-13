var input = require('fs').readFileSync('./stdin', 'utf8');
var lines = input.split('\r\n');

let salario = parseFloat(lines).toFixed(2);
let imposto_renda = 0;

if(salario > 4500.00){
    imposto_renda += (salario - 4500.00) * 0.28
    salario -= (salario - 4500.00)
}
if(salario > 3000.00){
    imposto_renda += (salario - 3000.00) * 0.18
    salario -= (salario - 3000.00)
}
if(salario > 2000.00){
    imposto_renda += (salario - 2000.00) * 0.08
}

if(imposto_renda == 0.00){
    console.log('Isento')
}else{
    console.log(`R$ ${imposto_renda.toFixed(2)}`)
}



