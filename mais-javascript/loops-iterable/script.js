const frutas = ['Banana', 'Morango', 'Uva'];
const frase = 'Isso é JavaScript'

for(const fruta of frutas) {
  console.log(fruta) // Banana, Morango, Uva;
}

//O nome 'fruta' pode ser qualquer valor.

for(const char of frase) {
  console.log(char); //Printa cada letra da frase.
}

const buttons = document.querySelectorAll('button')

for(const btn of buttons) {
  btn.style.color = 'blue';
}

console.log(...buttons); // Printando cada um dos botões iteráveis.

const carro = {
  marca: 'Honda',
  ano: 2018,
}

// for(const chave of carro) {
//   console.log(chave); // carro is not iterable
// }

Object.defineProperties(carro, {
  rodas: {
    value: 4,
    enumerable: true,
  }
})

for(const chave in carro) {
  console.log(chave); // marca, ano
  console.log(carro[chave]) // marca honda ano 2018
}

for(const fruta in frutas) {
  console.log(fruta); // Traz o index de cada uma das arrays;
  console.log(frutas[fruta]); //Traz o valor de cada uma das arrays.
}

const btnUnico = document.querySelector('button')
const btnStyles = getComputedStyle(btnUnico);

for(const style in btnStyles) {
  console.log(style) // Printa todas as propriedades do botão
  console.log(`${style}: ${btnStyles[style]}`) // Printas todas as propriedades e seus respectivos valores.
}

// fetch('https://pokeapi.co/api/v2/pokemon/')
// .then(({headers}) => console.log(headers));


// Crie 4 li's na página
// Utilizando o for...of
// adicione uma classe a cada li

const itens = document.querySelectorAll('li');

for (const item of itens) {
  item.classList.add('ativo')
  console.log(item);
}

// Utilize o for...in para listar
// todos as propriedades e valores
// do objeto window

for(const windowKey in window) {
  console.log(`${windowKey} ${window[windowKey]}`)
}