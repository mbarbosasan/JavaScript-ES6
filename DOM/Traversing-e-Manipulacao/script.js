// const h1 = document.querySelector('h1');
// const animaisLista = document.querySelector('.animais-lista');
// // innerHTML = Traz o código HTML 
// // innerText = Traz apenas o texto
// // outerHTML = Substitui o que está no lugar.
// // parentElement = vai puxando o pai dos itens referenciados
// // nextElementSibling = pegar o próximo item filho
// // previousElementSibling = pega o item anterior ao item referenciado

// // Selecionado o ultimo item da lista;
// // console.log(animaisLista.children[animaisLista.children.length - 1]) 
// // Selecionando o ultimo item da lista também;
// // console.log(animaisLista.querySelector('li:last-child'))

// const titulo = document.querySelector('.titulo')
// const animais = document.querySelector('.animais')
// const contato = document.querySelector('.contato')
// const mapa = document.querySelector('.mapa')

// //AppendChild = tem como objetivo adicionar um novo elemento aoitem referenciado.
// // animaisLista.appendChild(titulo)

// // Adiciona o item antes do item referenciado, no entanto, o item a ser movido precisa estar detrno do item referenciado.
// // contato.insertBefore(animais, mapa)


// // Criando elementos.
// const novoh1 = document.createElement('h1')

// novoh1.innerText = "Novo titulo"
// novoh1.classList.add('titulo')

// mapa.appendChild(novoh1)

// Clonando elementos;

// const h1 = document.querySelector('h1');
const faq = document.querySelector('.faq')

// const cloneh1 = h1.cloneNode(true)

// cloneh1.classList.add('azul')
// faq.appendChild(cloneh1)

// EX 01 - DUPLIQUE O MENU E ADICIONE ELE EM COPY

const menu = document.querySelector('.menu') 
const copy = document.querySelector('.copy')
const menuDuplicado = menu.cloneNode(true)
copy.appendChild(menu)

// EX 02 - SELECIONE O PRIMEIRO DT DO DL DE FAQ

const primeiroDt = faq.querySelector('dt')
const proximoDD = primeiroDt.nextElementSibling

// console.log(proximoDD.remove())

// EX 03 - SELECIONE O DD REFERENTE AO PRIMEIRO DT

// const animai


// EX 04 - SUBSTITUA O CONTEUDO HTML DE .FAQ pelo de .ANIMAIS
const animais = document.querySelector('.animais')

faq.innerHTML = animais.innerHTML