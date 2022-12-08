var input = require('fs').readFileSync('./stdin', 'utf8');//2.0 4.0 7.5 8.0
var lines = input.split('\n');//[ '2.0 4.0 7.5 8.0' ]
const dados = lines[0].split(' ')
const x = Number(dados[0])
const y = Number(dados[1])

if(x == 0 && y == 0){
   return 'Origem'
}else if(x > 0 ){
    if(y > 0 ){
        return 'Q1' 
    }else if(y < 0){
        return 'Q4'
    }
}else if(x < 0){
    if(y > 0 ){
        return 'Q2'
    }else if(y < 0){
        return 'Q3'
    }
}