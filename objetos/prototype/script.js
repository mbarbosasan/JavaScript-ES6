function Pessoa(nome, idade) {
  this.nome = nome;
  this.idade = idade;
  this.abracar = function() {
    return 'Abraçou!'
  }
  this.andar = function() {
    return "Andou pelo objeto";
  }
}

Pessoa.prototype.andar = function() {
  return "Pessoa andou";
}

const andre = new Pessoa('Andre', 28)


// PROTOTYPE 02;

const pais = "Brasil"
const cidade = new String('Rio');

const lista = document.querySelectorAll('li');

listaArray1 = Array.from(lista)

const listaAnimais = ['Cachorro', 'Gato', 'Cavalo'];

const Carro = {
  marca: 'Ford',
  preco: 2000,
  andar() {
    return "Oi";
  }
}

// EX 01 Cria uma função construtora de Pessoas, deve conter nome, sobrenome e idade;
// Crie um método no protótipo que retorne o nome completo da pessoa

function Pessoa(nome, sobrenome, idade) {
  this.nome = nome;
  this.sobrenome = sobrenome;
  this.idade = idade;
}


Pessoa.prototype.nomeCompleto = function() {
  return `${this.nome} ${this.sobrenome}` 
}

const moises = new Pessoa("Moises", "Santos", 21);

// Liste os métodos acessados por dados criados com NodeList, HTMLCollection, Document;

Object.getOwnPropertyNames(NodeList.prototype)
Object.getOwnPropertyNames(HTMLCollection.prototype)
Object.getOwnPropertyNames(Document.prototype);

//