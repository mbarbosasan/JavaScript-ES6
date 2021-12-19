// function perimetroForma(lado, totalLados) {
//   totalLados = totalLados;
//   return lado * totalLados;
// }

// perimetroForma(10, 4); // 40
// perimetroForma(10); // NaN

// function perimetroForma(lado, totalLados = 4) {
//   totalLados = totalLados;
//   return lado * totalLados;
// }

// perimetroForma(10); // 40;
// Arguments.
// function perimetroForma(lado, totalLados = 4) {
//   const argArray = Array.from(arguments);
//   console.log(arguments);
//   return lado * totalLados;
// }

// perimetroForma(10, 4) // Array de parametros ['10', '4']
// Rest
function perimetroForma(lado, totalLados, ...listaDeArgumentos) {
  console.log(listaDeArgumentos);
  listaDeArgumentos.forEach(item => console.log(item));
  return lado * totalLados;
}

perimetroForma(10, 4, 20, 30, 40) // 20, 30, 40;

//A principal diferneça enre o Rest e o Arguments é que o Rest só vai mostrar os valores inseridos após os primeiros parametros, ou seja, os que de fato foram colocados no local de Rest, ao contrário do Arguments que mostra todos em uma Array-like.

// Spread

const frutas = ['Banana', 'Uva', 'Morango']
const legumes = ['Cenoura', 'Batata']

const comidas = [...frutas, ...legumes]

console.log(comidas); //Banana, Uva, Morango, Cenoura, Batata

const todosOsNumeros = [3, 4, 5, 12, 3, 3, 24, 2, 3, 4]

const numeroMaximo = Math.max(...todosOsNumeros);

console.log(numeroMaximo); // 24

const btns = document.querySelectorAll('button')
const btnsArray = [...btns];

console.log(btnsArray); // [Button, button, button]

// Reescreva a função utilizando
// valores iniciais de parâmetros com ES6
// function createButton(background, color) {
//   background = background || 'blue';
//   if(color === undefined) {
//     color = 'red';
//   }
//   const buttonElement = document.createElement('button');
//   buttonElement.style.background = background;
//   return buttonElement;
// } 

function createButton(background = 'blue', color = 'red') {
  const buttonElement = document.createElement('button');
  buttonElement.style.background = background;
  buttonElement.style.color = color;
  console.log(buttonElement);
  return buttonElement;
}

const redButton = createButton(); // <button style="background: blue; color: red";></button>
const blueButton = createButton('black', 'blue') // <button style="background: black; color: blue";></button>



// Utilize o método push para inserir as frutas ao final de comidas.
const frutasExercicio = ['Banana', 'Uva', 'Morango'];
const comidasExercicio = ['Pizza', 'Batata'];

comidasExercicio.push(frutasExercicio);
console.log(comidasExercicio); // ['Pizza', 'Batata', Array(3)]

comidasExercicio.push(...frutasExercicio);
console.log(comidasExercicio); // ['Pizza', 'Batata', 'Banana', 'Uva', 'Morango']