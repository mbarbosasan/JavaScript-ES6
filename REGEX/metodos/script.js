const regexp = /\w+/gi;

// Se passarmos uma string, não precisamos dos //
// e devemos utilizar \\ para meta characters, pois é necessário
// escapar a \ especial. As Flags são o segundo argumento
const regexpObj1 = new RegExp('\\w+', 'gi');
const regexpObj2 = new RegExp(/\w+/, 'gi');

'JavaScript Linguagem 101'.replace(regexpObj1, 'X');
// X X X

// Exemplo complexo:
const regexpTELEFONE1 = /(?:\+?55\s?)?(?:\(?\d{2}\)?[-\s]?)?\d{4,5}[-\s]?\d{4}/g;
const regexpTELEFONE2 = new RegExp('(?:\\+?55\\s?)?(?:\\(?\\d{2}\\)?[-\\s]?)?\\d{4,5}[-\\s]?\\d{4}', 'g');

//Propriedades da RegExp

console.log(regexp.flags); // 'gi'
console.log(regexp.global); // true
console.log(regexp.ignoreCase); // true
console.log(regexp.source); // \w+

//.Test();

const regexpTest = /Java/g;
const frase = 'JavaScript é diferente de Java';

console.log(regexpTest.test(frase)); // true
console.log(regexpTest.lastIndex); // 4
console.log(regexpTest.test(frase)) // true
console.log(regexpTest.lastIndex); // 30
console.log(regexpTest.test(frase)) // false
console.log(regexpTest.lastIndex); // 0

//O metodo de Test funciona em formato de loop, a cada que vez é utilizado ele procura a partir da ultima palavra que ele encontrou.

while (regexpTest.test(frase)) {
  console.log(regexpTest.lastIndex);
}

const frase1 = 'JavaScript, TypeScript, CoffeeScript, Java';

const regexpExec = /\w+/g;

console.log(regexpExec.exec(frase1))
console.log(regexpExec.exec(frase1))
console.log(regexpExec.exec(frase1))

// O mesmo loop ocorre no Exec, com a diferença que não precisamos do LastIndex para saber onde o loop está e os dados retornam em formato de Array.

//.match()

const frase2 = 'JavaScript, TypeScript, CoffeeScript, Java, 200';

const regexpMatch = /\w+/g;

const resultados = frase2.match(regexpMatch);

console.log(resultados);


//.split() 

const regexpSplit = /[A-Za-z]+/g;

const resultadosSplit = frase2.split(regexpSplit);

console.log(resultadosSplit);

//.replace()

const tags = `
<ul>
  <li>Item 1 </li>
  <li>Item 2 </li>
</ul>
`;

// const regexpReplace = /(?<=<\/?)\w+/g;
const regexpReplace = /<li/g;

const resultadosReplace = tags.replace(regexpReplace, '$& class="ativa"')

console.log(resultadosReplace);

const regexp = /(\w+)(@[\w]+)/g;
const emails = `joao@homail.com.br
marta@ggmail.com.br
bruna@oulook.com.br`

emails.replace(regexp, function(...args) {
  console.log(args);
  if(args[2] === '@homail') {
    return `${args[1]}@hotmail`;
  } else if(args[2] === '@ggmail') {
    return `${args[1]}@gmail`;
  } else if(args[2] === '@oulook') {
    return `${args[1]}@outlook`;
  } else {
    return 'x';
  }
});

// joao@hotmail.com.br
// marta@gmail.com.br
// bruna@outlook.com.br