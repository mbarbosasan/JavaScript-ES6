// class Button {
//   constructor(text, background, color) {
//     this.text = text;
//     this.background = background;
//     this.color = color;
//     return this;
//   }
//   element() {
//     const buttonElement = document.createElement('button');
//     buttonElement.innerText = this.text;
//     buttonElement.style.background = this.background;
//     buttonElement.style.color = this.color;
//     return buttonElement;
//   }

//   appendTo(target) {
//     const targetElement = document.querySelector(target);
//     targetElement.appendChild(this.element());
//     return targetElement;
//   }

// }


// const blueButton = new Button('Comprar', 'blue', 'white');

// console.log(blueButton.appendTo('body'));

// class Button {
//   constructor(options) {
//     this.options = options;
//   }
// }


// const blueButton = new Button({
//   backgroundColor: 'blue',
//   text: 'Comprar',
//   color: 'white'
// });

// console.log(blueButton);