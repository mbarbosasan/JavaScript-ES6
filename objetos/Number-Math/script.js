const ano = 2018;
const preco = new Number(99);
//Verifica se o valor é um número
console.log(Number.isNaN(NaN)); // true
// Verifica se o valor é inteiro
console.log(Number.isInteger(20)); // true
console.log(Number.isInteger(20.5)); // false
// Transforma strings em valor decimal
console.log(parseFloat('99.99')) // 99,99
console.log(parseInt('199.99')) // 199
// Arredonda os numeros com base na casa decimal
const preco2 = 2.99;
console.log(preco2.toFixed());
//Transforma numeros em String;
const preco3 = 2.99;
console.log(preco3.toString());
//Formata o numero de acordo com a linguagem;
let preco4 = 99.99;
preco4 = preco4.toLocaleString('en-US', {style: 'currency', currency: 'BRL'});
console.log(preco4);

//Math é um objeto com propriedades e metodos com funções matemáticos;
console.log(Math.PI); // 3.14...
console.log(Math.abs(-5,5)); // 5
console.log(Math.ceil(5.1)); // Arredonda valores pra cima, 6
console.log(Math.floor(4.8)); // Arredonda valores para baixo, 4
console.log(Math.round(4.8)); //Arredonda valores para o mais próximo, seja para cima ou para baixo, 5
//Retorna o maior valor
console.log(Math.max(1, 2, 3, 4, 5, 6, 7, 8, 9));
//Retorna o menor valor
console.log(Math.min(1, 2, 3, 4, 5, 6, 7, 8, 9));
//Retorna valores aleatórios
console.log(Math.random());
// Retorna valores aleatórios entre 0 e 500
console.log(Math.random() * 500);
// Retornando valores entre 70 e 32;
console.log(Math.floor(Math.random() * (70 - 30 + 1) + 30))
// Math.floor(Math.random() * (max - min + 1) + min))

// Exercicios;

// Retorne um número aleatório
// entre 1050 e 2000

console.log(Math.floor(Math.random() * (2000 - 1050 + 1) + 1050));

// Retorne o maior número da lista abaixo
const numeros = '4, 5, 20, 8, 9';
const arrayNumeros = numeros.split(',')
console.log(Math.max(...arrayNumeros));

// Crie uma função para limpar os preços
// e retornar os números com centavos arredondados
// depois retorne a soma total
const listaPrecos = ['R$ 59,99', ' R$ 100,222',
                     'R$ 230  ', 'r$  200'];

function limparPreco(preco) {
  preco = +preco.toUpperCase().replace('R$', '').trim().replace(',', '.');
  preco = +preco.toFixed(2)
  return preco;
}

let soma = 0;
listaPrecos.forEach((item) => {
  soma += limparPreco(item);
})

console.log(soma.toLocaleString('pt-BR', {style: 'currency', currency: 'BRL'}));
