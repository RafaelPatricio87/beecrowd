var input = require('fs').readFileSync('./stdin', 'utf8');
var lines = input.split('\n');


const dados = lines[0].split(' ')
let h1 =  parseFloat(dados[0])
let m1 =  parseFloat(dados[1])
let h2 =  parseFloat(dados[2])
let m2 =  parseFloat(dados[3])
var total_hour, total_minute;

if ((h1 == h2) && (m1 == m2)){
    total_hour = (24 - h1) + h2;
    total_minute = m2 - m1; 
}
else if ((h1 == h2) && (m1 < m2)){
    total_hour = h2 - h1;
    total_minute = m2 - m1; 
}
else if ((h1 == h2) && (m1 > m2)){
    total_hour = (24 - h1) + h2 - 1;
    total_minute = (60 - m1) + m2; 
}
else if ((h1 < h2) && (m1 == m2)){
    total_hour = h2 - h1;
    total_minute = m2 - m1;
}
else if ((h1 > h2) && (m1 == m2)){
    total_hour = (24 - h1) + h2;
    total_minute = m2 - m1;
}
else if ((h1 < h2) && (m1 < m2)){
    total_hour = h2 - h1;
    total_minute = m2 - m1;
}
else if ((h1 < h2) && (m1 > m2)){
    total_hour = h2 - h1 - 1;
    total_minute = (60 - m1) + m2;
}
else if ((h1 > h2) && (m1 < m2)){
    total_hour = (24 - h1) + h2 - 1;
    total_minute = m2 - m1;
}
else{
    total_hour = (24 - h1) + h2 - 1;
    total_minute = (60 - m1) + m2;
}

console.log(`O JOGO DUROU ${total_hour} HORA(S) E ${total_minute} MINUTO(S)`)
