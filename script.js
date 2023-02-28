let gridValue = 16;
let gridSize = (760 / gridValue) - 2;
console.log(gridSize);

makeGrid(gridSize);

function makeGrid(gridSize) {
const container = document.querySelector('.container');

for (let i = 0; i < gridValue; i++) {
  const grid = document.createElement('div');
  grid.classList.add('gridBox');
  grid.setAttribute('style', `border: 1px solid black; width: ${gridSize + 'px'}; height: ${gridSize + 'px'}`);

  container.appendChild(grid)
}

}