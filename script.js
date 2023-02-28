let gridValue = prompt("Enter grid size");
let gridSize = (760 / gridValue) - 2;
console.log(gridSize);

makeGrid(gridSize);

function makeGrid(gridSize) {
  const container = document.querySelector('.container');

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

/*
const gridBoxs = document.querySelector('.gridBox');
//gridBoxs.addEventListener("mouseover" , (gridColor))

gridBoxs.forEach((gridBox) => {
  gridBox.addEventListener('mouseover', gridColor);
})

function gridColor() {
  grid.style.backgroundColor = "black";
}
*/