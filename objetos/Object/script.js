// OBJECT 1

const pessoa = new Object({
  nome: 'Moises',
})

console.log(pessoa);

const carro = {
  marca: 'Marca',
  rodas: 4,
  init(valor) {
    this.marca = valor;
    return this;
  },
  acelerar() {
    return this.marca + ' acelerou'
  },
  buzinar() {
    return this.marca + 'buzinou'
  },
}

const honda = Object.create(carro);
honda.init('Honda');

console.log(honda.acelerar());

const ferrari = Object.create(carro).init('Ferrari');

console.log(ferrari);

const funcaoAutomovel = {
  acelerar() {
    return 'acelerou'
  },
  buzinar() {
    return  'buzinou'
  }
}

const moto = {
  rodas: 2,
  capacete: true,
}
//Atribui métodos e atributos para o objeto alvo;
Object.assign(moto, funcaoAutomovel);
Object.assign(carro, funcaoAutomovel);
//Altera as propriedades do objeto podendo permitir ou não a edição desses objetos;
Object.defineProperties(moto, {
  rodas: {
    // value: 2,
    // não permite a exclusão do valor, valor padrão
    // configurable: false,
    // Permite a edição do valor, por padrão é falso;
    // writable: true,
    get() {
      return this._rodas;
    },
    // Define valores
    set(valor) {
      this._rodas = valor * 4;
    },
  },
  // Pega valores
})

console.log(moto);

// OBJECT 2

Object.getOwnPropertyDescriptors(Array);
// Lista com métodos e propriedades e Array

Object.getOwnPropertyDescriptors(Array.prototype);
// Lista com métodos e propriedades do protótipo de Array

Object.getOwnPropertyDescriptor(window, 'innerHeight');
// Puxa de uma única propriedade

Object.keys(Array);
// [] vazia, pois não possui propriedades enumeráveis

Object.keys(carro);
// ['marca', 'ano']
Object.values(carro);
// ['Ford', 2018]
Object.entries(carro);
// [['marca', 'Ford'], ['ano', 2018]]

Object.getOwnPropertyNames(Array);
// ['length', 'name', 'prototype', 'isArray', 'from', 'of']

Object.getOwnPropertyNames(Array.prototype);
// [..., 'filter', 'map', 'every', 'some', 'reduce', ...]

Object.getOwnPropertyNames(carro);
// ['marca', 'ano']

const frutas = ['Banana', 'Pêra']
Object.getPrototypeOf(frutas);
Object.getPrototypeOf(''); // String

const frutas1 = ['Banana', 'Pêra'];
const frutas2 = ['Banana', 'Pêra'];

Object.is(frutas1, frutas2); // false

//Não permite a edição nem a exclusão de nenhum método/atributo do objeto.
Object.freeze(carro);
//Não permite a exclusão mas permite a edição dos valores atuais;
Object.seal(carro);
//Permite a exclusão dos valores mas não permite a edição;
Object.preventExtensions(carro);

console.log(Object.isFrozen(carro)); // true
console.log(Object.isSealed(carro)); // true
console.log(Object.isExtensible(carro)); // false

//Object 3
//Mostra o protótipo de uma string
''.constructor.prototype;
//Mostra o protótipo de uma array
[].constructor.prototype;


// Crie uma função que verifique
// corretamente o tipo de dado

function verificarDado(dado) {
  return Object.prototype.toString.call(dado)
}
console.log(verificarDado([]))

// Crie um objeto quadrado com
// a propriedade lados e torne
// ela imutável

const quadrado = {};
Object.defineProperties(quadrado, {
  lados: {
    value: 4,
    enumerable: true,
  }
})
// Previna qualquer mudança
// no objeto abaixo
const configuracao = {
  width: 800,
  height: 600,
  background: '#333'
}
Object.freeze(configuracao);

// Liste o nome de todas
// as propriedades do
// protótipo de String e Array

console.log(Object.getOwnPropertyNames(String.prototype))
console.log(Object.getOwnPropertyNames(Array.prototype))

