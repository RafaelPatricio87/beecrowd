const { match } = require('assert');

var input = require('fs').readFileSync('./stdin', 'utf8');
var lines = input.split('\r\n');

let d1 = Number(lines[0].split(' ')[1]) 
let d2 = Number(lines[2].split(' ')[1])
const [h1,m1,s1] =lines[1].split(':').map((el) => parseInt(el))
const [h2,m2,s2] =lines[3].split(':').map((el) => parseInt(el))


const t1 = s1 + m1*60 + h1*60*60 + d1*24*60*60

const t2 = s2 + m2*60 + h2*60*60 + d2*24*60*60

let diferenca = t2 -t1


const dia = parseInt(diferenca / (24*60*60))
diferenca = diferenca % (24*60*60)

const hor = parseInt(diferenca / (60*60))
diferenca = diferenca % ( 60*60)

const min = parseInt(diferenca / 60)
diferenca = diferenca % 60

const seg = diferenca 

console.log(`${dia} dia(s)`)
console.log(`${hor} hora(s)`)
console.log(`${min} minuto(s)`)
console.log(`${seg} segundo(s)`)