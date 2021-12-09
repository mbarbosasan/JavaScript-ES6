fetch('https://pokeapi.co/api/v2/pokemon/')
.then(resolve => {
  resolve.json().then(pokemon => {
    // console.log(pokemon);
  })
})

const url = 'https://jsonplaceholder.typicode.com/posts/2'
const options = {
  method: 'HEAD',
  // body: '{"title" : "JavaScript}',
  headers: {
    "Content-Type": 'applicatio/json; charset=utf-8',
  }
}

fetch(url, options)
.then(response => {
  console.log(response.headers.forEach(console.log));
})

const dadosGoogle = 'https://www.google.com';

fetch(dadosGoogle)
.then(resolve => {
  resolve.then(dados => {
    console.log(dados);
  })
})