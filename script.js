const btn = document.querySelector('button');
const container = document.querySelector('.container');

btn.addEventListener('click', () => {
  userPrompt();
  removeGrid();
  makeGrid(gridSize);
})

let gridValue = 16;
let gridSize = (760 / gridValue) - 2;
makeGrid(gridSize);

function makeGrid(gridSize) {
  gridSize = (760 / gridValue) - 2;

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

function userPrompt() {
  gridValue = prompt("Enter grid size (max of 100)");

  if (gridValue > 100) {
    userPrompt();
  }
}