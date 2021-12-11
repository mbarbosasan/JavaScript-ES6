import Countdown from './modules/countdown.js';

const tempoParaONatal = new Countdown('24 December 2021 23:59:59 GMT-0300')
const tempoParaOAnoNovo = new Countdown('31 December 2021 23:59:59 GMT-0300')

console.log(tempoParaONatal.days);
console.log(tempoParaONatal.hours);
console.log(tempoParaONatal.minutes);

console.log(tempoParaONatal.total)

console.log(tempoParaOAnoNovo.total)

setInterval(() => {
  console.log(tempoParaOAnoNovo.total)
}, 1000)
