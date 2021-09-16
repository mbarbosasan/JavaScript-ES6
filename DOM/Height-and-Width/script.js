const listaAnimais = document.querySelector('.animais-lista')

listaAnimais.clientHeight // é igual a HEIGHT + PADDING
listaAnimais.offsetHeight // é igual a HEIGHT + PADDING + BORDER
listaAnimais.scrollHeight // é o valor total considerando também o scroll.

// os mesmos comandos podem ser utilizados para o WIDTH.

const animaisTop = listaAnimais.offsetTop // Distancia do elemento até o topo.
console.log(animaisTop)

const primeiroh2 = document.querySelector('h2')
console.log(primeiroh2.offsetLeft) // Distancia do elemento até o bottom;

const rect = primeiroh2.getBoundingClientRect() // As coordenadas exatas do elemento.
console.log(rect)

console.log(
  window.innerWidth,
  window.outerWidth,
  window.innerHeight,
  window.outerHeight,
  window.pageYOffset,
  window.pageXOffset,
)

const small = window.matchMedia('(max-width: 600px').matches
if (small) {
  console.log('Usuário mobile')
} else {
  console.log('Usuário desktop')
}

// EX 01 VERIFIQUE A DISTNACIA DA PRIMEIRA IMAGEM EM RELAÇÃO AO TOPO DA PAGINA.

const img = document.querySelector('img')
console.log(img.offsetTop)

// EX 02 Retorne a soma da largura de todas as imagens.

function somaImagem() {
  const imagens = document.querySelectorAll('img')
  let soma = 0;
imagens.forEach((imagem) => {
  soma += imagem.offsetWidth
  console.log(imagem.offsetWidth)
} )
console.log(soma)
}

window.onload = somaImagem()

// 03 

const links = document.querySelectorAll('a')
links.forEach((link) => {
  const linkWidth = link.offsetWidth
  const linkHeight = link.offsetHeight
  if (linkWidth > 48 && linkHeight > 48) {
    console.log(link, 'Possui acessibilidade')
  } else {
    console.log(link, 'Não possui acessibilidade')
  }
} )
console.log(links)

// 04 

const browserSmall = window.matchMedia('(max-width: 720px)').matches
if (browserSmall) {
  const menu = document.querySelector('.menu')
  menu.classList.add('menu-mobile')
}