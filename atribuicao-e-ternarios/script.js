var numero = 20
var numero2 = 10

numero += numero2 // numero = numero + numero2
console.log(numero)

// Operador ternario
// Sintaxe: (condição) ? 'valor a ser retornado em caso true' : 'valor a ser retornado em caso false)


var idade = 21

var podeDirigir = (idade >= 18) ? true : false

console.log(podeDirigir)

// IFs e Elses podem ser utilizados sem o chaveamente caso a linha de resposta seja apenas de 1 LINHA;


// EX 01:

var scroll = 1000;

scroll += 500;

console.log(scroll)

// EX 02:

var possuiCarro = true;
var possuiCasa = true;
var darcredito = (possuiCarro && possuiCasa) ? true : false

console.log(darcredito)