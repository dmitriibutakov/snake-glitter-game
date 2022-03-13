const board = document.querySelector('#board')
let colors = ['#E0BBE4', '#FFDFD3', '#D5E2EF', '#E7F8D8', '#B2AA9B', '#CEB493', '#C69EBC', '#999ACF'];
const SQUARE_NUM = 1000;

for (let i = 0; i < SQUARE_NUM; i++) {
   const square = document.createElement('div')
   square.classList.add('square')

   square.addEventListener('mouseover', () => setRandomColor(square))

   square.addEventListener('mouseleave', () => removeRandomColor(square))

   board.append(square)

}

function setRandomColor(element) {
   let color = randomColor();
   element.style.backgroundColor = randomColor(color);
   element.style.boxShadow = `0 0 2px ${color}, 0 0 10px ${color}`
}

function removeRandomColor(element) {
   element.style.backgroundColor = '#1d1d1d'
   element.style.boxShadow = `0 0 2px #161616`
}

function randomColor() {
   let index = Math.floor(Math.random() * colors.length);
   return colors[index];
}