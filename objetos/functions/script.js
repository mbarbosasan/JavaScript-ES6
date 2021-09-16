const perimetro = new Function('lado', 'return lado * 4');

function somar(n1, n2) {
  return n1 + n2 + '';
}

console.log(somar.name)

function darOi(nome, idade) {
  console.log("Olá! " + nome + idade)
}

darOi.call({}, 'Moisés', 21);

function descricaoCarro(velocidade) {
  console.log(this);
  console.log(this.marca + " " + this.ano + this.velocidade);
}

descricaoCarro.call({marca: 'Honda', ano: 2015}, 100) ;

// EX 01
const carros = ['Ford', 'Fiat', 'VW'];
carros.forEach.call(carros, (item) => {
  console.log(item);
})
// EX02
const frutas = ['Banana', 'Uva', 'Pera']
frutas.forEach.call(frutas, (item) => {
  console.log(item);
})

// function DOM(seletor) {
//   this.element = document.querySelector(seletor);
// }

// DOM.prototype.ativo = function(classe) {
//   console.log(this);
//   this.element.classList.add(classe);
// }

// const ul = new DOM('ul');
// console.log(ul);
// const li = {
//   element: document.querySelector('li'),
// }

// //Adiciona a classe com base na função feita acima;
// ul.ativo('ativar');

// ul.ativo.call(li, 'ativo');

// Array.prototype.mostrarThis = function() {
//   console.log(this)
// }

// Array.prototype.pop.call(frutas);

// const li = document.querySelectorAll('li');
// const filtro = Array.prototype.filter.call(li, (item) => {
//   return(item.classList.contains('ativo'));
// })

// console.log(filtro)

const numeros = [3,4,6,1,34,44,32];
Math.max.apply(null, numeros);
Math.max.call(null, 3, 4, 5, 6, 7, 20);

// Podemos passar null para o valor
// de this, caso a função não utilize
// o objeto principal para funcionar

const carro = {
  marca: 'Ford',
  ano: 2018,
  acelerar: function(aceleracao, tempo) {
    return `${this.marca} acelerou ${aceleracao} em ${tempo}`;
  }
}

const honda = {
  marca: 'Honda', 
}

const acelerarHonda = carro.acelerar.bind(honda);

console.log(acelerarHonda(100, 20))

// Retorne a soma total de caracteres dos
// parágrafos acima utilizando reduce
const paragrafos = document.querySelectorAll('p');
const totalCaracteres = Array.prototype.reduce.call(paragrafos, (acumulador, item) => {
  return acumulador + item.innerText.length;
}, 0)

console.log(paragrafos);
console.log(totalCaracteres);
// Crie uma função que retorne novos elementos
// html, com os seguintes parâmetros
// tag, classe e conteudo.

function criarElemento(tag, classe, conteudo) {
  const elemento = document.createElement(tag)
  classe ? elemento.classList.add(classe) : null;
  conteudo ? elemento.innerHTML = conteudo : null;
  return elemento;
}
console.log(criarElemento('li', 'azul', 'Esse é o conteúdo'))

// Crie uma nova função utilizando a anterior como base
// essa nova função deverá sempre criar h1 com a
// classe titulo. Porém o parâmetro conteudo continuará dinâmico

const h1Titulo = criarElemento.bind(null, 'h1', 'titulo')

console.log(h1Titulo('Cursos de JavaScript'))