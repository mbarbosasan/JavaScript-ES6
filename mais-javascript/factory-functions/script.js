"use strict";

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
  if (!(this instanceof Pessoa))
    // ou (!new.target)
    return new Pessoa(nome);
  this.nome = nome;
}

Pessoa.prototype.andar = function () {
  return `${this.nome} andou`;
};

const dev = Pessoa("Moisés");

console.log(dev);

//Factory Functions 2

//Exemplos mostrando como funciona o JQuery por baixo dos panos.

function $$(selectedElements) {
  const elements = document.querySelectorAll(selectedElements);

  function hide() {
    elements.forEach((elements) => {
      elements.style.display = "none";
    });
    return this;
  }

  function show() {
    elements.forEach((elements) => {
      elements.style.display = 'initial';
    })
    return this;
  }

  function on(onEvent, callback) {
    elements.forEach((elements) => {
      elements.addEventListener(onEvent, callback);
    })
    return this;
  }

  function addClass(className) {
    elements.forEach(elements => {
      elements.classList.add(className);
    })
    return this;
  }

  function removeClass(className) {
    elements.forEach(elements => {
      elements.classList.remove(className);
    })
    return this;
  }

  return {
    elements,
    hide,
    show,
    on,
    addClass,
    removeClass,
  };
}

const btns = $$("button");

console.log(btns.hide().show());

btns.on('click', handleClick);

function handleClick(event) {
  console.log(event.target);
}

btns.addClass('active') // <button class="active" style="display: initial;">Comprar</button>

btns.removeClass('active'); // <button class="" style="display: initial;">Comprar</button>

