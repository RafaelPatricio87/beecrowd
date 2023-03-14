var input = require('fs').readFileSync('./stdin', 'utf8');
var lines = input.split('\n');

const dados = lines[0].split(' ')
const aH =  Number(parseFloat(dados[0]))
const aM =  Number(parseFloat(dados[1]))
const bH =  Number(parseFloat(dados[2]))
const bM =  Number(parseFloat(dados[3]))

let totalSeg = Math.abs(((aH * 60) + aM ) - ((bH * 60) + bM))
let horas = Math.floor(totalSeg/60) 
let minutos = Math.floor(totalSeg%60)
if(totalSeg == 0){

    console.log(`O JOGO DUROU 24 HORA(S) E 0 MINUTO(S)`) 
}else {

    console.log(`O JOGO DUROU ${horas} HORA(S) E ${minutos} MINUTO(S)`)
}

