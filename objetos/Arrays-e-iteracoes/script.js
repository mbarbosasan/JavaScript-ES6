// // const carros = ['Ford', 'Fiat', 'Honda'];

// // carros.forEach((item, index, array) => {
// //   console.log(item.toUpperCase())
// // })

// // //Exemplo de uso do forEach;
// // const li = document.querySelectorAll('li');
// // li.forEach((item) => [item.classList.add('ativa')])
// // //Utilizando o map;
// // const maisCarros = ['Mitsubishi', 'BMW', 'Mercedes'];
// // const novaArray = maisCarros.map((item, index, array) => {
// //   return item.toUpperCase();
// // })
// // console.log(novaArray);
// // //MAP vs FOREACH, sempre que for necessário alterar algum valor da array e receber novos valores para poder continuar com as interações deve ser usar o MAP, o foreach deve ser usado apenas em situações de loop onde não se espera trabalhar com os valores retornado já que sempre vai retornar undefined e assim impossibilitar qualquer continuidade;
// // const numeros = [2, 4, 6, 8, 78];
// // const numerosX2 = numeros.map(n => n * 2);

// // console.log(numerosX2);

// // const aulas = [
// //   {
// //     nome: 'HTML 1',
// //     min: 15
// //   },
// //   {
// //     nome: 'HTML 2',
// //     min: 10
// //   },
// //   {
// //     nome: 'CSS 1',
// //     min: 20
// //   },
// //   {
// //     nome: 'JS 1',
// //     min: 25
// //   },
// // ]
// // // Puta merda, essa foi genial;
// // const tempoAulas = aulas.map(aula => aula.min);
// // console.log(tempoAulas);
// // //Outros exemplos de uso do map;
// // const nomeAulas = aula => aula.nome;
// // const nomeAulas2 = function(aula) {
// //   return aula.nome;
// // }
// // const arrayNomeAulas = aulas.map(nomeAulas2);
// // console.log(arrayNomeAulas);

// // REDUCE
// //Exemplo 1
// const aulas2 = [10, 25, 30];
// const reduceAulas = aulas2.reduce((acumulador, item, index, array) => {
//   // console.log(acumulador, item, index, array);
//   return acumulador + item;
// });
// // console.log(reduceAulas);
// //Exemplo 2
// const numeros = [10, 25, 60, 5, 35, 10];
// const maiorNumero = numeros.reduce((anterior, atual) => {
//   // if(anterior > atual) {
//   //   return anterior;
//   // } else
//   //   return atual;
//   return anterior > atual ? anterior : atual;
// });
// console.log(maiorNumero);
// //Exemplo 3

// const aulas = [
//   {
//     nome: "HTML 1",
//     min: 15,
//   },
//   {
//     nome: "HTML 2",
//     min: 10,
//   },
//   {
//     nome: "CSS 1",
//     min: 20,
//   },
//   {
//     nome: "JS 1",
//     min: 25,
//   },
// ];

// const listaAulas = aulas.reduce((acumulador, atual, index) => {
//   acumulador[index] = atual.nome;
//   return acumulador;
// }, {});

// console.log(listaAulas);

// // SOME
// //Retorna valor true/false se pelo menos UM item dentro da array for igual ao item procurado;
// const frutas = ["Banana", "Pêra", "Uvas"];
// const temUva = frutas.some((fruta) => {
//   return fruta === "Uvas";
// });

// console.log(temUva);

// //EVERY
// //Retorna valor true/false de todos os itens dentro da array forem iguais ao item procurado;

// const every = frutas.every((fruta) => {
//   return fruta;
// });
// console.log(every);

// // const numeros = [10, 25, 60, 5, 35, 10];
// const maiorQue3 = numeros.every((n) => n >= 3);
// console.log(maiorQue3);

// //FIND
// //Procura um determinado valor na array e retorna esse valor;
// //FinIndex
// // Faz a mesma coisa porém retorna o index, ou seja o número de onde está o valor;

// const indexUva = frutas.findIndex((item) => {
//   return item === "Banana";
// });

// console.log(indexUva);

// //FILTER
// // retorna uma array com todos os valores que retornaram TRUE;

// const frutas1 = ["Banana", undefined, null, "", "Uva", 0, "Maçã"];
// const arrayFrutas = frutas1.filter((item) => {
//   return item;
// });
// console.log(arrayFrutas);

// const numeros1 = [6, 43, 22, 88, 101, 29];
// const arrayNumeros1 = numeros1.filter((item) => item > 20);
// console.log(arrayNumeros1);

// const maiorQue15 = aulas.filter((item) => item.min >= 15);
// console.log(maiorQue15);

// EXERCICIOS

// Selecione cada curso e retorne uma array
// com objetos contendo o título, descricao,
// aulas e horas de cada curso

const cursos = document.querySelectorAll(".curso");
const arrayCursos = Array.from(cursos);

const objetosCurso = arrayCursos.map((curso) => {
  const titulo = curso.querySelector("h1").innerText;
  const descricao = curso.querySelector("p").innerText;
  const aulas = curso.querySelector(".aulas").innerText;
  const horas = curso.querySelector(".horas").innerText;
  return {
    titulo,
    descricao,
    aulas,
    horas,
  };
});

console.log(objetosCurso);

// Retorne uma lista com os
// números maiores que 100
const numeros2 = [3, 44, 333, 23, 122, 322, 33];
const maiorNumeros = numeros2.filter((item) => item > 100);
console.log(maiorNumeros);

//  Verifique se Baixo faz parte
//  da lista de instrumentos e retorne true
const instrumentos = ["Guitarra", "Baixo", "Bateria", "Teclado"];
const temBaixo = instrumentos.some((item) => item === "Baixo");
console.log(temBaixo);

//  Retorne o valor total das compras
const compras = [
  {
    item: "Banana",
    preco: "R$ 4,99",
  },
  {
    item: "Ovo",
    preco: "R$ 2,99",
  },
  {
    item: "Carne",
    preco: "R$ 25,49",
  },
  {
    item: "Refrigerante",
    preco: "R$ 5,35",
  },
  {
    item: "Quejo",
    preco: "R$ 10,60",
  },
];

const valorTotal = compras.reduce((acumulador, item) => {
  const precoLimpo = +item.preco.replace("R$", "").replace(",", ".");
  return acumulador + precoLimpo;
}, 0);

console.log(valorTotal);
