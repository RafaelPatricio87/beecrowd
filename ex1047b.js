var input = require('fs').readFileSync('./stdin', 'utf8');
var lines = input.split('\n');

const dados = lines[0].split(' ')
const h1 =  Number(parseFloat(dados[0]))
const m1 =  Number(parseFloat(dados[1]))
const h2 =  Number(parseFloat(dados[2]))
const m2 =  Number(parseFloat(dados[3]))

let horaTotal = h2 - h1
let minutoTotal = m2 - m1 
if(horaTotal < 0 ){
    horaTotal += 24
}

if(minutoTotal < 0){

    minutoTotal += 60
    horaTotal -= 1
}

if( minutoTotal == 0 && horaTotal == 0){
    console.log('O JOGO DUROU 24 HORA(S) E 0 MINUTO(S)')
}else{
    console.log(`O JOGO DUROU ${horaTotal} HORA(S) E ${minutoTotal} MINUTO(S)`)
}
