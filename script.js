let container = document.getElementById('container');


function drawing(){
  const gridItems = document.querySelectorAll('.grid-item');

  gridItems.forEach(item => {
      let itemOpacity = 0;
      item.addEventListener("mouseover", () => {
          itemOpacity += 0.1;
          item.style.backgroundColor = "black";
          item.style.opacity = `${itemOpacity}`;
      });
  });
};

function getRowsAndColumns () {
  let rows = prompt("How many rows would you like to have?");
  let columns = prompt("And how many columns?");
  return [rows, columns];
};

function addEventOnButtonClick() {
  let button = document.querySelector('button');
  button.addEventListener('click', () => {
    createGrid(getRowsAndColumns());
  })
};

// function accepts an array [numOfRows, numOfColumns]
function createGrid(gridTemplate) {
  clearContainer();
  createDivs(gridTemplate);
  addGridTemplate(gridTemplate[1]);
  drawing();
};

function clearContainer() {
  container.innerHTML = "";
};

function addGridTemplate(numOfColumns) {
  container.style['grid-template-columns'] = `repeat(${numOfColumns}, 1fr)`;
};

// accepts an array of two numbers [rows, columns]
function createDivs(gridTemplate) {
  for (let i = 0; i < gridTemplate[0]*gridTemplate[1]; i++) {
    let gridItem = document.createElement('div');
    gridItem.setAttribute('class', 'grid-item');
    container.appendChild(gridItem);
  }
};


createGrid([16,16]); //16 rows and 16 columns is a default value
addEventOnButtonClick();
