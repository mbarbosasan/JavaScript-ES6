// const img = document.querySelector('img');

// // Também funciona como arrow function;
// // Primeiro exemplo:
// // img.addEventListener('click', function() {
// //   console.log('clicou!')
// // })

// img.addEventListener('click', callback)
// console.log(img)

// function callback(event) {
//   console.log(event);
// }
// const animaisLista = document.querySelector('.animais-lista')
// // animaisLista.addEventListener('click', callbackLista);

// function callbackLista(event) {
//   // console.log(event.currentTarget)
//   // console.log(event.target);
//   // console.log(event.type);
//   // console.log(event.path);
// }

// const linkExterno = document.querySelector('a[href^="http"]')

// linkExterno.addEventListener('click', handleLinkExterno);
// // Metodo que tem como objetivo anular o padrão do item;
// function handleLinkExterno(event) {
//   event.preventDefault();
//   console.log(this.getAttribute('href'));
// }

// // const h1 = document.querySelector('h1');
// // h1.addEventListener('click', handleEvent);
// // h1.addEventListener('mouseenter', handleEvent)
// // h1.addEventListener('mousemove', handleEvent)

// function handleEvent(event) {
//   console.log(event.type, event)
// }

// // window.addEventListener('scroll', handleEvent);
// // window.addEventListener('keydown', handleEvent);

// // window.addEventListener('keydown', handleKeyboard)

// // function handleKeyboard(event) {
//   // if(event.key === 'a') {
//     // document.body.classList.toggle('azul');
//   // }
// // }

// // EVENTOS 02

// const imgs = document.querySelectorAll("img");

// imgs.forEach((img) => {
//   img.addEventListener('click', handleImg);
// })

// function handleImg(event) {
//   console.log(event.currentTarget.getAttribute('src'));
// }

// // EX 01 - Quando o usuário clicar nos links internos do site, adicione a classe ativo ao item clicado e remova dos demais caso eles possuam a mesma, previna o comportamento padrão desses links

// const linksInternos = document.querySelectorAll('a[href^="#"]');

// linksInternos.forEach((link) => {
//   link.addEventListener('click', handleLink)
// })

// function handleLink(event) {
//   event.preventDefault();
//   linksInternos.forEach((link) => {
//     link.classList.remove('ativo')
//   })
//   event.currentTarget.classList.add('ativo');

// }

// // EX 02 - Selecione todos os elementos do site começando a partir do body, ao clique mostre exatamente quais elementos estão sendo clicados;

// // EX 03 - Utilizando o código anterior, ao invés de mostrar no console, remova o elemento que está sendo clicado, o metodo remove();


// const todosElementos = document.querySelectorAll('body *') 

// todosElementos.forEach((elemento) => {
//   elemento.addEventListener('click', handleElement)
// })

// function handleElement(event) {
  // console.log(event.currentTarget.remove());
// }

// EX 04 - Se o usuário clicar na tecla (t), aumente todo o texto do site;



window.addEventListener('keydown', handleClickT)

function handleClickT(event) {
  if(event.key == 't') {
    
  }
}