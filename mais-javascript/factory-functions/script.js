'use strict'

// function createButton(text) {
//   function element() {
//     const buttonElement = document.createElement('button');
//     buttonElement.innerText = text;
//     return buttonElement;
//   }
  
//   return Object.freeze({
//     text,
//     element,
//   });
// }

// const btnComprar = createButton('Comprar');
// const btnVender = createButton('Vender');

//Ice Factory

// btnComprar.text = 'Eu não deveria poder editar isso'
// btnComprar.element = 'Eu não deveria poder editar isso'
// script.js:21 Uncaught TypeError: Cannot assign to read only property 'text' of object '#<Object>' at script.js:21

function Pessoa(nome) {
  if (!(this instanceof Pessoa)) // ou (!new.target)
    return new Pessoa(nome);
  this.nome = nome;
}

Pessoa.prototype.andar = function() {
  return `${this.nome} andou`;
}

const dev = Pessoa('Moisés');

console.log(dev)