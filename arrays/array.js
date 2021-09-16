var videoGames = ['Switch', 'PS4', 'XBox'];

// videoGames.pop() // Remove o último item.

videoGames.push('WiiU')

// for (i = 0; i <= 10; i++) {
//     console.log(i)
// }
// // Listar array com o for loop.
// // for (let i = 0; i < videoGames.length; i++) 
//  {
//     console.log(videoGames[i])
//     if (videoGames[i] === "PS4") {
//         break
//     }
// } 

// videoGames.forEach( function(item, index, array) {
//     console.log(item, index, array)
// })

// EX - 01 - CRIAR ARRAY E LISTAR OS ANOS EM QUE O BRASIL FOI CAMPEÃO COM A MENSAGEM.

var brasilCampeao = ['1959', '1962', '1970', '1994', '2002']

for (let i = 0; i <= brasilCampeao.length; i++) {
    console.log(`O brasil ganhou a copa de ${brasilCampeao[i]}`)
}

// EX - 02 - LISTAR ARRAY E PARAR EM VALOR ESPECÍFICO.

var frutas = ['Banana', 'Maçã', 'Pera', 'Uva', 'Melância']

for (let i = 0; i <= frutas.length; i++) {
    console.log(frutas[i])
    if (frutas[i] === "Pera") {
        break
    }
}

// EX - 03

var ultimaFruta = frutas[frutas.length -1]