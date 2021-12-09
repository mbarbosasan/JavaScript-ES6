export default function initFetchBitcoin() {
    fetch('https://www.blockchain.com/ticker')
    .then(response => response.json())
    .then(bitcoin => {
      console.log(bitcoin)
  })
}
