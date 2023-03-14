var input = require('fs').readFileSync('./stdin', 'utf8');
var lines = input.split('\n');


const dados = lines[0].split(' ')
const hora_inical =  Number(parseFloat(dados[0]))
const minuto_inicial =  Number(parseFloat(dados[1]))
const hora_final =  Number(parseFloat(dados[2]))
const minuto_final=  Number(parseFloat(dados[3]))

hora_total = hora_final - hora_inical
minuto_total = minuto_final - minuto_inicial

if(hora_total < 0){
    hora_total += 24
}
if(minuto_total < 0){
    minuto_total += 60
    hora_total -= 1
}
if(minuto_total == 0 && hora_total == 0){
    console.log(`O JOGO DUROU 24 HORA(S) E 0 MINUTO(S)`)
}else{
    console.log(`O JOGO DUROU ${hora_total} HORA(S) E ${minuto_total} MINUTO(S)`)
}

