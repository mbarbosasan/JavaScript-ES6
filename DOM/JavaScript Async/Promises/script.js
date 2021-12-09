// const promessa = new Promise(function(resolve, reject) {
//   let condicao = false;
//   if (condicao) {
//   setTimeout(() => {
//     resolve({nome: "Moisés", idade: "22"})
//   }, 1000)
// }
//   else {
//     reject(Error("Erro ocorreu na promise"));
//   }
// });

// const retorno = promessa.then(function(resolucao) {
//   console.log(resolucao);
//   return 'Teste';
// }).then(resolucao => {
//   console.log(resolucao);
//   return "Ola";
// })
// .catch(rejeitada => {
//   console.log(rejeitada);
// })

// console.log(retorno);

const login = new Promise((resolve) =>
  setTimeout(() => {
    resolve("Usuário logado");
  }, 1000));

const dados = new Promise((resolve) => {
    setTimeout(() => {
    resolve("Dados carregados");
    }, 1500)});

const carregouTudo = Promise.all([login, dados])

carregouTudo.then((resolucao) => {
  console.log(resolucao);
})

const carregouPrimeiro = Promise.race([login, dados]);

carregouPrimeiro.then((resolucao) => {
  console.log(resolucao);
})