function espera(texto) {
  console.log(texto);
}
//Muito mais comum sendo utilizado com o arrow function devido ao contexto do This.
// setTimeout(function() {
//   console.log("testando")
// }, 1000);

// for (let i = 0; i <= 20; i++) {
//   setTimeout(() => {
//     console.log(i)
//   }, 1000 * i);
// }

const btn = document.querySelector('button');

btn.addEventListener('click', handleClick);
//Caso seja feito uma função anonima e não uma arrow function o this vai ser uma referencia ao window e não ao button, sendo assim, sempre usar arrow function;
function handleClick() {
  setTimeout(() => {
    this.classList.add('active')
  }, 1000);
}

function loop(texto) {
  console.log(texto);
}
// setInterval(loop, 1000, 'Passou 1s');

// let i = 0;
// const meuLoop = setInterval(() => {
//   console.log(i++)
//   if (i > 20) {
//     clearInterval(meuLoop)
//   }
// }, 1000);

// EX 01
// Mude a cor da tela para azul e depois para vermelho a cada 2s.

function mudarClasse() {
  document.body.classList.toggle('active');
}

// setInterval(mudarClasse, 2000)

// Crie um cronometro utilizando o setInterval. Deve ser possível
// iniciar, pausar e resetar (duplo clique no pausar).

const iniciar = document.querySelector('.iniciar')
const pausar = document.querySelector('.pausar')
const tempo = document.querySelector('.tempo')

iniciar.addEventListener('click', iniciarTempo)
pausar.addEventListener('click', pausarTempo)
pausar.addEventListener('dblclick', resetarTempo);

let i = 0;
let timer;

function iniciarTempo() {
  timer = setInterval(() => {
    tempo.innerText = i++;
  }, 300);
  this.setAttribute('disabled', '');
}

function pausarTempo() {
  clearInterval(timer);
  iniciar.removeAttribute('disabled')
}

function resetarTempo() {
  tempo.innerText = 0;
  i = 0;
}