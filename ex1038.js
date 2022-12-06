var input = require('fs').readFileSync('./stdin', 'utf8');

function lanche(dados){
    const [a,b] = dados.split(' ')
    const lanches = {
        1: 4.00,
        2: 4.50,
        3: 5.00,
        4: 2.00,
        5: 1.50
    }
  const total = parseFloat(lanches[a] * b).toFixed(2)
    console.log("Total: R$",total)
  
}

lanche(input)
