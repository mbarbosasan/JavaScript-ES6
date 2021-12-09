const dados = fetch("./dados.json");

dados.then((resolve) => {
  resolve.text().then((jsonText) => {
    const jsonFinal = JSON.parse(jsonText);
    // console.log(jsonText);
    // console.log(jsonFinal);
  });
});

const config = {
  player: "Google",
  tempo: 25.5,
  aula: "2.1 JavaScript",
};

const stringConfig = JSON.stringify(config);

localStorage.configuracoes = JSON.stringify(config);
// console.log(config);
// console.log(stringConfig);

console.log(JSON.parse(localStorage.configuracoes));
