// const cep = fetch('https://viacep.com.br/ws/60540513/json/');

// cep.then(resolucao => {
//   resolucao.json().then(body => {
//     const conteudo = document.querySelector('.conteudo');
//     conteudo.innerText = body.logradouro;
//   })
// })

// const  css = fetch('./style.css');

// css.then(resolucao => {
//   resolucao.text().then(body => {
//   const style = document.createElement('style');
//   const conteudo = document.querySelector('.conteudo');
//   style.innerHTML = body;
//   conteudo.appendChild(style);
//   })
// })

// const sobre = fetch('./sobre.html');
// const div = document.createElement('div');
// sobre.then(resolucao => {
//   resolucao.text().then(body => {
//     console.log(body);
//     div.innerHTML = body;
//     const titulo = div.querySelector('h1');
//     document.querySelector('h1').innerText = titulo.innerText;
//   })
// })

// const imagem = fetch('./mapa.png');

// imagem.then(resolucao => {
//   resolucao.blob().then(body => {
//     const blobUrl = URL.createObjectURL(body);
//     const imagemDom = document.querySelector('img');
//     imagemDom.src = blobUrl;
//   })
// });

// const cep2 = fetch('');

// cep2.then(resolucao => {
//   console.log(resolucao);
// })

// Utilizando a API https://viacep.com.br/ws/${CEP}/json/
// crie um formulário onde o usuário pode digitar o cep
// e o endereço completo é retornado ao clicar em buscar
const input = document.querySelector(".cep");
input.addEventListener("change", encontrarEndereço);

function encontrarEndereço() {
  const CEP = input.value;
  const viaCEP = fetch(`https://viacep.com.br/ws/${CEP}/json/`);

  viaCEP.then((resolucao) => {
    resolucao.json().then((body) => {
      const resultado = document.querySelector(".resultadoCEP");
      resultado.innerText = body.logradouro + " " + body.complemento;
    });
  });
}

// Utilizando a API https://blockchain.info/ticker
// retorne no DOM o valor de compra da bitcoin and reais.
// atualize este valor a cada 30s

setInterval(() => {
  const resultadoAPI = document.querySelector(".resultadoBitcoin");
  const bitcoinAPI = fetch("https://blockchain.info/ticker");

  bitcoinAPI.then((resolucao) => {
    resolucao.json().then((body) => {
      resultadoAPI.innerText = body.BRL.symbol + " " + body.BRL.buy;
      // console.log(body.BRL.buy);
    });
  });
}, 10000);

// Utilizando a API https://api.chucknorris.io/jokes/random
// retorne uma piada randomica do chucknorris, toda vez que
// clicar em próxima

setInterval(() => {
  const chuckNorrisAPI = fetch("https://api.chucknorris.io/jokes/random");
  const chuckNorrisDiv = document.querySelector(".chuckNorris");
  chuckNorrisAPI.then((resolucao) => {
    resolucao.json().then((body) => {
      chuckNorrisDiv.innerText = body.value;
    });
  });
}, 5000);
