const cpfsList = document.querySelectorAll('.cpf li');

console.log(cpfsList);

// const listaCpfs = Array.from(cpfs)
// const arrayCpfs = [];
// listaCpfs.forEach(cpf => {
//   arrayCpfs.push(cpf.innerText);
//   console.log(arrayCpfs);
// })

const elementsInnerText = ([...elements]) => {
  return elements.map(element => element.innerText);
}

console.log(elementsInnerText(cpfsList));

const limparCPF = (cpf) => {
  return cpf.replace(/\D/g, '')
}

const construirCPF = (cpf) => {
  return cpf.replace(/(\d{3})(\d{3})(\d{3})(\d{2})/g, '$1.$2.$3-$4')
}

const formatarCPFs = (cpfs) => {
  return cpfs.map(limparCPF).map(construirCPF);
}

const substituirCPFs = (cpfsElements) => {
  const cpfs = elementsInnerText(cpfsElements);
  const cpfsFormatados = formatarCPFs(cpfs);

  cpfsElements.forEach((element, index) => {
    element.innerText = cpfsFormatados[index];
  })

  console.log(cpfsFormatados);
}

// console.log(limparCPF('121.121.12133'))
// console.log(construirCPF('12312312393'))

const resultado = elementsInnerText(cpfsList);

console.log(formatarCPFs(resultado));

substituirCPFs(cpfsList);
