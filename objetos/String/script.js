// const comida = 'Pizza';
// const agua = new String('Agua');

// const frase = 'A melhor comida';
// console.log(frase.length -1);;
// console.log(frase.charAt(1));;

const frase = "A melhor linguagem é ";
const linguagem = "JavaScript";

const fraseFinal = frase + linguagem;

const fruta = "Banana";
const listaFrutas = "Melancia, Banana, Laranja";

console.log(listaFrutas.includes(fruta));
// Verifica se o item existe;

console.log(fruta.startsWith("Banana"));
// Verifica se o item começa com o valor selecionado;

const transacao1 = "Déposito do cliente";
const transacao2 = "Depósito de fornecedor";
const transacao3 = "Taxa de camisas";

// str.slice(start, end);
console.log(transacao3.slice(-5));

// str.substring(start,end);
// Não funciona bem com os valores negativos;
console.log(linguagem.substring(3, 5));

//str.indexOf(Search) e str.lastIndexOf(search), começando do início e no final respectivamente;
console.log(fruta.indexOf("B"));
console.log(fruta.lastIndexOf("a"));
// padStart e padEnd realiza a inserção de valores, ficando a quantidade e logo após o valor que deverá ser inserido;
const preco = "R$ 99,00";
console.log(preco.padStart(10, "00000"));
console.log(preco.padEnd(10, "00000"));

const listaPrecos = ["R$99", "R$199", "R$12000"];
listaPrecos.forEach((item) => {
  console.log(item.padStart(10, "-"));
});
//Repete o valor na quantidade de vezes inseridas;
const frase2 = "Ta";
console.log(frase2.repeat(5));

//Substitui os valores pelos valores escolhidos;
let listaItens = "Camisas Bonés Calças Bermudas Vestidos Saias";
listaItens = listaItens.replace(/[ ]+/g, ", ");
console.log(listaItens);
//Procura o valor inserido e o remove retornando uma array sem o valor preenchido;
const arrayLista = listaItens.split(", ");
console.log(arrayLista);

const htmlText = "<div> O melhor item </div><div> a melhor listsa </div>";
const htmlArray = htmlText.split("div");
const novoHtml = htmlArray.join("section");
console.log(novoHtml);
//Insere o valor na array após cada item;
const frutasArray = ["Banana", "Melancia", "Laranja"];
console.log(frutasArray.join("a"));
//str.trim(), str.trimStart(), str.trimEnd() Remove os espaços podendo ser de ambos os lados, do início ou final;"
const valor = "     R$30,00      ";
console.log(valor.trimEnd());
console.log(valor.trim());
console.log(valor.trimStart());

// EXERCICIOS

// Retorne uma array com a lista abaixo
const transportes = "Carro;Avião;Trem;Ônibus;Bicicleta";
const arrayTransportes = transportes.split(";");
console.log(arrayTransportes);

// Substitua todos os span's por a's
let html = `<ul>
<li><span>Sobre</span></li>
<li><span>Produtos</span></li>
<li><span>Contato</span></li>
</ul>`;
html = html.split("span").join("a");
console.log(html);
// Retorne o último caracter da frase
const frase3 = "Melhor do ano!";
console.log(frase3.charAt(frase3.length - 1));

// Utilizando o foreach na array abaixo,
// some os valores de Taxa e os valores de Recebimento

const transacoes = [
  {
    descricao: "Taxa do Pão",
    valor: "R$ 39",
  },
  {
    descricao: "Taxa do Mercado",
    valor: "R$ 129",
  },
  {
    descricao: "Recebimento de Cliente",
    valor: "R$ 99",
  },
  {
    descricao: "Taxa do Banco",
    valor: "R$ 129",
  },
  {
    descricao: "Recebimento de Cliente",
    valor: "R$ 49",
  },
];
let taxaTotal = 0;
let recebimentoTotal = 0;
transacoes.forEach((item) => {
  const numeroLimpo = +item.valor.replace("R$", "");
  if (item.descricao.slice(0, 4) === "Taxa") {
    taxaTotal += numeroLimpo;
  } else {
    recebimentoTotal += numeroLimpo;
  }
});

console.log(taxaTotal);
console.log(recebimentoTotal);

// Retorne o total de taxas

const transacoes2 = [
  "Taxa do Banco",
  "   TAXA DO PÃO",
  "  taxa do mercado",
  "depósito Bancário",
  "TARIFA especial",
];

let = taxasTotal = 0;
transacoes2.forEach((item) => {
  item = item.toLowerCase().trim().slice(0, 4);
  if (item === "taxa") {
    taxasTotal++;
  }
  console.log(taxasTotal);
});
