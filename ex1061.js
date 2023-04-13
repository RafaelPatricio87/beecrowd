const { match } = require('assert');

var input = require('fs').readFileSync('./stdin', 'utf8');
var lines = input.split('\r\n');

let d1 = Number(lines[0].split(' ')[1]) 
let d2 = Number(lines[2].split(' ')[1])
const [h1,m1,s1] =lines[1].split(':').map((el) => parseInt(el))
const [h2,m2,s2] =lines[3].split(':').map((el) => parseInt(el))

let seg =  s2 - s1;
let min = m2 - m1;
let hor = h2 - h1;
let dia = d2 - d1;

if(seg < 0){
    seg += 60;
    min--;
}
if(min < 0){
    min += 60;
    hor--
}
if(hor < 0){
    hor += 24;
    dia--
}
console.log(`${dia} dia(s)`)
console.log(`${hor} hora(s)`)
console.log(`${min} minuto(s)`)
console.log(`${seg} segundo(s)`)