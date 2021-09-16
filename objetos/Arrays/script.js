const instrumentos = ["Guitarra", "Baixo", "Violão"];
const precos = [49, 99, 69, 89];

const dados = [
  new String("Tipo 1"),
  ["Carro", "Portas", { cor: "Azul", preco: 2000 }],
  function andar(nome) {
    console.log(nome);
  },
];

dados[2]("Ford");
dados[1][2].cor; // azul

const carros = new Array("Ford", "Fiat", "Honda");
carros[2] = "Ferrari";
carros[3] = "Kia";
carros[20] = "Renault";
console.log(carros.length);

const li = document.querySelectorAll("li");
const arrayLi = Array.from(li);

console.log(arrayLi);
console.log(li);

const frutas = ["Banana", "Pêra", ["Uva Roxa", "Uva Verde"]];
frutas.length; // 3

frutas[0].length; // 6
console.log(frutas[1].length); // 4
frutas[2].length; // 2

const instrumentos2 = ["Guitarra", "Baixo", "Violão"];
instrumentos2.sort();

const idades = [32, 21, 33, 43, 1, 12, 8];
idades.sort();
console.log(instrumentos);
console.log(idades);
//Unshift adiciona itens no começo da Array;
//Push adiciona itens no final da array;
const carros2 = ["Ford", "Fiat", "VW"];
carros2.unshift("Renault", "Mitsubishi");
carros2.push("Kia", "Ferrari");

console.log(carros2);
//Pop remove o ultimo item da array;
//Shift remove o primeiro item da array;
console.log(carros2.pop());
console.log(carros2.shift());
console.log(carros2);
//Inverte a ordem da array;
console.log(carros2.reverse());

//Insere itens na array a partir de um index e pode remover uma quantidade também, splice(inicio, quantos a serem removidos, valor a ser inserido);
console.log(carros2);
console.log(carros2.splice(2, 1, "Fusca"));
console.log(carros2);
//Copia os valores de um array e os insere novamente a partir do valor indicado, copyWithin(index, inicio das cópias, quantas vezes a serem colados)
console.log(["Item1", "Item2", "Item3", "Item4", "Item5"].copyWithin(2, 0, 2));
console.log(["Item1", "Item2", "Item3", "Item4", "Item5"].copyWithin(-1));
//Preenche uma a array a partir de um index com o valor informado;
console.log(["Item1", "Item2", "Item3", "Item4", "Item5"].fill("Banana", 0, 3));
//Concatena os valores de duas array em uma unica e também pode inserir novos valores;
const transporte1 = ["Barco", "Aviao"];
const transportes2 = ["Carro", "Moto"];
const transportes = transporte1.concat(transportes2, "Van");
console.log(transportes);

//Metodos que verificam se o valor existe, o número da index do valor na array a partir do inicio e também a partir do final;
const linguagens = ["html", "css", "js", "php", "python", "js"];
console.log(linguagens.includes("css")); // true
console.log(linguagens.indexOf("js")); // 2
console.log(linguagens.lastIndexOf("js")); // 5
//Metodo que junta todos os valores de uma array e retorna em formato de String e também é possível incluir determinados valores após cada valor da array;
console.log(linguagens.join()); // html,css,js,php,python,js
console.log(linguagens.join(" ")); // html,css,js,php,python,js
console.log(linguagens.join("-.-")); // html,css,js,php,python,js

let htmlString = "<h2>Título Principal</h2>";
htmlString = htmlString.split("h2"); // ['<', '>Título Principal</', '>']
htmlString = htmlString.join("h1"); // <h1>Título Principal</h1>

//Retorna os itens da array começando pelo valor de index até o valor final, muito últip para clonar arrays;
console.log(linguagens.slice(2, 4));

// Exercicios

const comidas2 = ["Pizza", "Frango", "Carne", "Macarrão"];
// Remova o primeiro valor de comidas e coloque em uma variável
// Remova o último valor de comidas e coloque em uma variável
// Adicione 'Arroz' ao final da array
// Adicione 'Peixe' e 'Batata' ao início da array
comidas2.shift([comidas2[0]]);
comidas2.pop(comidas2[-1]);
comidas2.unshift("Peixe", "Batata");
comidas2.push("Arroz");
console.log(comidas2);

const estudantes = ["Marcio", "Brenda", "Joana", "Kleber", "Julia"];
// Arrume os estudantes em ordem alfabética
// Inverta a ordem dos estudantes
// Verifique se Joana faz parte dos estudantes
// Verifique se Juliana faz parte dos estudantes
estudantes.sort();
estudantes.reverse();
console.log(estudantes.includes("Joana"));
console.log(estudantes.includes("Juliana"));
console.log(estudantes);

let html = `<section>
              <div>Sobre</div>
              <div>Produtos</div>
              <div>Contato</div>
            </section>`;
// Substitua section por ul e div com li,
// utilizando split e join
html = html.split("div").join("li").split("div").join("ul");
console.log(html);

const carros3 = ["Ford", "Fiat", "VW", "Honda"];
// Remova o último carro, mas antes de remover
// salve a array original em outra variável
const carrosCopia = carros3.slice();
carros.pop();
console.log(carros3);
