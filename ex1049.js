var input = require('fs').readFileSync('./stdin', 'utf8');
var lines = input.split('\r\n');
let a = lines[0]
let b = lines[1]
let c = lines[2]

if(a == 'vertebrado' && b == 'ave' && c == 'carnivoro') console.log('aguia')
if(a == 'vertebrado' && b == 'ave' && c == 'onivoro') console.log('pomba')

if(a == 'vertebrado' && b == 'mamifero' && c == 'onivoro') console.log('homem')
if(a == 'vertebrado' && b == 'mamifero' && c == 'herbivoro') console.log('vaca')

if(a == 'invertebrado' && b == 'inseto' && c == 'hematofago') console.log('pulga')
if(a == 'invertebrado' && b == 'inseto' && c == 'herbivoro') console.log('lagarta')

if(a == 'invertebrado' && b == 'anelideo' && c == 'hematofago') console.log('sanguessuga')
if(a == 'invertebrado' && b == 'anelideo' && c == 'onivoro') console.log('minhoca')
    
