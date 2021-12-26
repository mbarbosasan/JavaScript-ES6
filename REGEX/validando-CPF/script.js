import ValidarCpf from "./validar-cpf.js";

const cpf = document.querySelector('#cpf');
const validarCpf = new ValidarCpf(cpf).iniciar();

// console.log(validarCpf.limpar('111.111.111-23')) // 111111111-23

// console.log(validarCpf.formatar('12312312312')) // 123.123.123-12

// console.log(validarCpf.construir('12341234123')); // 123.412.341-23

// console.log(validarCpf.adicionarEvento())