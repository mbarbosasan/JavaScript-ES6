function Carro(marca, preco) {
  this.marca = marca;
  this.preco = preco;
}

const honda = new Carro('Honda', 3000);
const fiat = new Carro('Fiat', 4000);
fiat.marca = "Fiat";

function Carro2(marca, precoInicial) {
  this.taxa = 1.2;
  const precoFinal = precoInicial * this.taxa;
  this.marca = marca;
  this.preco = precoFinal;
  console.log(this)
}

const mazda = new Carro2("Mazda", 5000)


// AULA 2 

// const Dom = {
//   seletor: 'li',
//   element() {
//    return document.querySelector(this.seletor);
//   },
//   ativar() {
//     this.element().classList.add('ativar');
//   }
// }


function Dom(seletor) {
  this.seletor = seletor,
  this.element = function() {
   return document.querySelector(this.seletor);
  }
  this.ativar = function() {
    this.element().classList.add('ativar');
  }
}

const li = new Dom('li');
const ul = new Dom('ul');

// EX 01: Transforme o objeto abaixo em uma constructor Function

function Pessoa(nome, idade) {
  this.nome = nome;
  this.idade = idade;
  this.andar = function() {
    console.log(this.nome + ' andou');
  }
}

// EX 02 Crie 3 pessoas, João - 20 anos, Maria - 25 anos, Bruno - 15 anos;

const Joao = new Pessoa('Joao', 20);

const Maria = new Pessoa('Maria', '25')

const Bruno = new Pessoa('Bruno', '15');

// Crie uma Constructon Function (Dom) para manipulação de listas de elementos do Dom, deve conter as seguintes propriedades e metodos;

//elements, retorna NodeList com os elementos selecionados
//addClass(classe), adiciona a classe e todos os elementos
//removeClass(classe), remove a classe e todos os elementos

function Dom(seletor) {
  const elementList = document.querySelectorAll(seletor);
  this.element = elementList;
  this.addClass = function(classe) {
    elementList.forEach((element) => {
      element.classList.add(classe);
    })
  }
  this.removeClass =  function(classe) {
    elementList.forEach((element) => {
      element.classList.add(classe);
    })
  }
}

const listaItens = new Dom('li')
