console.log(videoGames) 

addEventListener('click', function(){ console.log("Oi!")})

function imc (peso, altura) {
    const imc = peso / (altura ** 2)
    console.log(imc)
}

function terceiraIdade(idade) {
    if (typeof idade !== 'number') {
        return 'Por favor preencha um número'
    }
    if (idade >= 60) {
        return true
    } else {
        return false
    }
}

console.log(terceiraIdade(40)) 


function paisesVisitados(paises) {
    var totalPaises = 193
    return `Faltam visitar ${totalPaises - paises} países`
}

*/
// EX 01:

var idade = 18

function verificar() {
    if (typeof idade === "number") {
        return `Você tem ${idade} anos` 
    } else {
        return "Digite um número!"
    }
}

// EX 02:

function perimetroQuadrado(a, b, c, d) {
    return a + b + c + d
}

// EX 03:

function nomeCompleto(nome, sobrenome) {
    return `${nome} ${sobrenome}` 
}


// EX 04:


function number(a) {
    if (a % 2 == 0) {
        return `${a} é um número par!`
    } else {
        return `${a} é um número impar!`
    }
}

// EX 05:

function tipo(a) {
    return typeof a
}

// EX 06: 

// addEventListener é uma função nativa do JavaScript
// o primeiro parâmetro é o evento que ocorre e o segundo o Callb
// utilize essa função para mostrar no console o seu nome complet
// quando o evento 'scroll' ocorrer.

addEventListener('click ', function(){
    console.log("Moisés Santos!")
})
