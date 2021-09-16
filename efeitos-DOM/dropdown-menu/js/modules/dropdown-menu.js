export default function initDropdownMenu() {

}

const dropdownMenus = document.querySelectorAll('[data-dropdown]');

dropdownMenus.forEach((menu) => {
  menu.addEventListener('click', handleClick);
// Usando em mais de um evento;
  ['touchstart', 'click'].forEach(userEvent => {
    menu.addEventListener(userEvent, handleClick);
  })
})


function handleClick(event) {
  event.preventDefault();
  this.classList.toggle('active')
}