const carro = {
  marca: 'Fiat',
  ano: 2018,
  portas: 4,
}

const {marca, ano} = carro;

console.log(marca, ano); // Fiat 2018

//Caso o valor buscadono destructuring não exista, retornará sempre undefined.

const cliente = {
  nome: 'Moises',
  compras: {
    digitais: {
      livros: ['Livro 1', 'Livro 2'],
      videos: ['Video JS', 'Video HTML']
    },
    físicas: {
      cadernos: ['Caderno 1']
    },
  }
}

// const {livros, videos} = cliente.compras.digitais;

// console.log(livros, videos); // ['Livro 1', 'Livro 2'], ['Video JS' , 'Video HTML']

// Importante ressaltar que os valores buscados passam a ser uma constante e não podem mais ser utilizados ao longo do código.

//Outro ponto também é sobre o nível de busca, caso buscassemos somente por "Cliente" não conseguiriamos buscar os valores pois não estaria no mesmo nível dos valores buscados.

//Aninhando a desestruturação

const {digitais, fisicas, digitais: {livros, videos}} = cliente.compras;

console.log(livros);

//Em caso de necessidade de buscarmos por um valor em um nível maior ou menor podemos acessá-lo como se estivessemos acessando um objeto normalmente.

// Devido a estarmos criando uma variável para cada atributo do objeto isso pode gerar problemas ao longo do código já que essas palavras não podem mais ser utilizadas, evitando isso:

const {nome: nomeCliente} = cliente;

console.log(nomeCliente); // 'Moises'

//Trabalhando com valores padrões em caso do valor buscado não existir ou não tiver sido definido.

const {email = 'email@gmail.com'} = cliente;

//Destructuring em Arrays;

const frutas = ['Banana', 'Uva', 'Morango']

const [primeira, segunda, terceira] = frutas;

console.log(primeira); // Banana
console.log(segunda); // Uva
console.log(terceira) // Morango 

// O destructuring pode também servir para criarmos varias variáveis em sequencia

// Sem destructuring
// const primeiro = 'Item 1';
// const segundo = 'Item 2';
// const terceiro = 'Item 3';

// Com destructuring

const [primeiro, segundo, terceiro] = ['Item 1', 'Item 2', 'Item 3']

console.log(primeiro); // Item 1
console.log(segundo) // Item 2
console.log(terceiro) // Item 3;

//Destructuring em Events

document.addEventListener('keyup', handleKeyboard)

function handleKeyboard({key, keyCode}) {
  console.log(key, keyCode)
}

//Exercicios

// Extraia o backgroundColor, color e margin do btn
const btn = document.querySelector('button');
const btnStyles = getComputedStyle(btn);

const {backgroundColor, margin, color} = btnStyles;

console.log(backgroundColor); // rgb(239, 239, 239)
console.log(margin); // 0px
console.log(color); // rgb(0, 0, 0)

// Troque os valores das variáveis abaixo
let cursoAtivo = 'JavaScript';
let cursoInativo = 'HTML';

[cursoAtivo, cursoInativo] = [cursoInativo, cursoAtivo];

console.log(cursoAtivo); // HTML
console.log(cursoInativo); // JavaScript

// Corrija o erro abaixo
const cachorro = {
  nome: 'Bob',
  raca: 'Labrador',
  cor: 'Amarelo'
}

// const {bobCor: cor} = cachorro; // Uncaught ReferenceError: bobCor is not defined

const {cor: bobCor} = cachorro;

console.log(bobCor); // Amarelo