const menu = document.querySelector('.menu')
console.log(menu.classList) // Array-like

menu.classList.add('ativo') // Adiciona uma nova classe
menu.classList.remove('ativo') // remove a classe
menu.classList.toggle('ativo') // Se possuir ele remove, se não tiver ele adiciona
console.log(menu.classList.contains('ativo')) // valor booleano 

const animais = document.querySelector('.animais')

console.log(animais.attributes) // Retorna os atributos;

const img = document.querySelector('img')

console.log(img.getAttribute('src')) // retorna o valor do source

img.setAttribute('alt', 'É uma raposa')
console.log(img.hasAttribute('alt')) // Verifica se tem o atributo "alt"
img.removeAttribute('alt') // remove o alt;

// // EX 01 - ADICIONE A CLASSE ATIVO A TODOS OS ITENS DO MENU

const itensMenu = document.querySelectorAll('.menu a');

itensMenu.forEach((item) => {
  item.classList.add('ativo');
})

  // EX 02 Remove a classe ativo de todos os itens do menu e manter apenas no primeiro
  itensMenu.forEach((item) => {
    item.classList.remove('ativo')
  })

  itensMenu[0].classList.add('ativo');

  // EX 03 Verifique se as imagens possuem o atributo alt

  const imgs = document.querySelectorAll('img');

  imgs.forEach((item) => {
    console.log(img, img.hasAttribute('alt'))
  });

  // EX 04 Modifique o href do link externo do menu

  const link = document.querySelector('a[href^="http"]');
  link.setAttribute('href', 'https://www.google.com');
  console.log(link);