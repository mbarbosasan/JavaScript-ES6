async function puxarDados() {
  const promiseDados = fetch('./dados.json')
  const promiseClientes = fetch('./cliente.json')

  const jsonDados = await (await promiseDados).json();
  const jsonClientes = await (await promiseClientes).json();

  const dadosJSON = await responseDados.json();
  console.log(dadosJSON)
  document.body.innerText = dadosJSON.aula;
}



puxarDados();