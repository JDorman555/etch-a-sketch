const btn = document.querySelector('button');
const container = document.querySelector('.container');
let gridValue = 16;

btn.addEventListener('click', () => {
  gridValue = prompt("Enter grid size");
  removeGrid();
  makeGrid(gridSize);
})

let gridSize = (760 / gridValue) - 2;
//console.log(gridSize);

makeGrid(gridSize);

function makeGrid(gridSize) {
  gridSize = (760 / gridValue) - 2;
  console.log(gridSize);

  for (let i = 0; i < gridValue; i++) {
    for (let h = 0; h < gridValue; h++) {
      const grid = document.createElement('div');
      grid.classList.add('gridBox');
      grid.setAttribute('style', `border: 1px solid black; width: ${gridSize + 'px'}; height: ${gridSize + 'px'}`);
      grid.addEventListener('mouseover', () => {
        grid.style.backgroundColor = "black";
      });

      container.appendChild(grid)
    }
  }
}

function removeGrid() {
  while (container.firstChild) {
    container.removeChild(container.lastChild);
  }
}