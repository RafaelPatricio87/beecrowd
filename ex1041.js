var input = require('fs').readFileSync('./stdin', 'utf8');//2.0 4.0 7.5 8.0
var lines = input.split('\n');//[ '2.0 4.0 7.5 8.0' ]
const dados = lines[0].split(' ')
const x = Number(parseFloat(dados[0]).toFixed(1))
const y = Number(parseFloat(dados[1]).toFixed(1))


  if(x == 0 && y == 0){
console.log(`Origem`) 
}else if(x != 0 && y == 0){
console.log(`Eixo X`)  
}else if(x == 0 && y!= 0){
console.log(`Eixo Y`)  
}else if(x > 0 && y > 0){
console.log(`Q1`)  
}else if(x > 0 && y < 0){
console.log(`Q4`) 
}else if(x < 0 && y > 0){
console.log(`Q2`)  
}else if(x < 0 && y < 0){
console.log(`Q4`)  
}



