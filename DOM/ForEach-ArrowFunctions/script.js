const imgs = document.querySelectorAll('img')

imgs.forEach(function(item, index, array){
 console.log(item, index, array)
   
//   // const titulos = document.getElementsByClassName('titulo')
//   // const titulosArray = Array.from(titulos) // ClassName vem em formato de HTML Collection e sendo assim não é array-like, o comando está transformando em array para que seja utilizado o método ForEach()
  
//   // titulosArray.forEach(function(item, index, array) {
//     //   // console.log(array)
//     // })
    
//     // console.log(titulos) // HTML Collection
//     // console.log(titulosArray) // Após a transformação da array;
    
//     // Arrow Functions

//     const imgs = document.querySelectorAll('img')
    
//     // imgs.forEach((item, index, array) => {
//     //   console.log(item, index, array)
//     // })

//     // Caso tenha apenas um argumento funcionará normalmente sem os parenteses
    
//     // imgs.forEach((item) => console.log(item)) // Método curto;

//     // EX 01 - MOSTRAR NO CONSOLE CADA PARÁGRAFO DO SITE;

//     const paragrafos = document.querySelectorAll("p")
//     // paragrafos.forEach(function (item) {
//     //   // console.log(item)
//     // })
//     paragrafos.forEach((item) => {
//       // console.log(item)
//     })

//     // EX 02 - MOSTRE O TEXTO DE CADA PARÁGRAFO NO CONSOLE
    
//     paragrafos.forEach((item) => {
//     //   console.log(item.innerText)
//     // })

//     // EX 03 - COMO CORRIGIR OS ERROS ABAIXO.
    
//     // const images = document.querySelectorAll('img')

//     // imgs.forEach(item, index => { // Acima de um parametro os parenteses é obrigatório.
//     //   console.log(item, index)
//     // })
    
//     // let i = 0
//     // imgs.forEach( => { // Quando não há parametros os parenteses são necessários para identificar que é uma Arrow Function
//     //   console.log(i++) 
//     // })

//     // imgs.forEach(() => i++)