
let item1 = 1;
function funcao1() {
  let item2 = 2;
  function funcao2() {
    let item3 = 3;
    console.log(item1);
    console.log(item2);
    console.log(item3);
  }
  funcao2();
}

funcao1();
function contagem() {
  let total = 0;
  return function incremento() {
    total++;
    console.log(total)
  }
}
console.log(contagem)
const ativarIncremento = contagem();
ativarIncremento();
ativarIncremento();
ativarIncremento();
ativarIncremento();
ativarIncremento();
ativarIncremento();

//Mostrando o exemplo dos closures nas Factory Functions

debugger
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

btns.addClass('active')
