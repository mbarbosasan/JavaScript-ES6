// 'use strict' coloca o JS em estado restrito.

function mostrarCarro() {
    // carro = "Fusca" <--- Cria uma variável global, não deve ser feito.
    var carro = "Fusca"
    console.log(carro)
}

mostrarCarro()
// console.log(carro) Fora do escopo da função a palavra 'carro' não tem definição.
// Diferença do "var" para o "let/const" é de que a definição por 'var' deixa o valor vazar do bloco, sendo assim, fica acessível fora do bloco.

const data = {
    ano: 2018,
    mes: 'Dezembro',
}

data.ano = 2019
// data = 'isso' = Não é possível reatribuir valores constantes.

// EX 01:

{
    var cor = 'preto'
    const marca = 'Fiat'
    let portas = 4
}

// console.log(cor, marca, portas); <----- Marca e Portas são const e let, logo estão fora do escopo do bloco e não são acessíveis fora do mesmo.

// EX 02: 

// const dois = 2 <---- Solução

function somarDois(x) {
    const dois = 2 // <--- Não será acessível fora do bloco da
    return x + dois
} 
function dividirDois(x) {
    return x / dois
}