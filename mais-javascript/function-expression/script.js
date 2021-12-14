function soma(a,b) {
  return a + b;
}

console.log(soma(4, 2)); // 6

const somar = function(a, b) {
  return a + b;
}

console.log(somar(4, 2)); // 6

// A diferença entre essas duas formas de usarmos as funções está na etapa de Hoisting onde no primeiro exemplo poderemos utilizá-la tanto antes quanto depois da função estar escrita, caso tentassemos utilizar uma FE antes da sua apliação teriamos o retorno de undefined.

//Outro ponto importante também sobre as function declaration é que as funções acabam vazando pro escopo global e isso pode acabar gerando conflitos.

//As functions expressions também podem ser utilizadas com o Arrow Function.

const quadrado = (a) => a * a;

console.log(quadrado(4)) // 16

//BÔNUS
// IIFE
//Exemplo de blocos:
const instrumento = 'Violao'

function initCodigo() {
  const instrumento = 'Guitarra';
  console.log(instrumento);
}

initCodigo(); // Guitarra

console.log(instrumento); // Violao

//Usado antigamento para isolar as funções em blocos e já executá-las após a criação, era bastante comum em browser mais antigos devido a ausência dos modules.

(function() {
  const instrumento = 'Guitarra';
  console.log(instrumento);
}())

//Exercicios:


// Remova o erro
// priceNumber('R$ 99,99');
// const priceNumber = n => +n.replace('R$', '').replace(',', '.');


const priceNumber = n => +n.replace('R$', '').replace(',', '.');

console.log(priceNumber('R$ 99,99')); // 99.99

//function expression sendo executada antes da criação do método.

// Crie uma IIFE e isole o escopo
// de qualquer código JS.

(function() {
  const moto = 'honda';
  console.log(moto); // honda;
}())

// Como podemos utilizar
// a função abaixo.
const active = callback => callback();

active(function() {
  console.log('Esse é o retorno da função');
})