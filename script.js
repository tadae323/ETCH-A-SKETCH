let container = document.getElementById('container');


function addEventOnMouseEnter() {
  let gridItems = document.querySelectorAll(".grid-item");
  gridItems.forEach(item => item.addEventListener("mouseenter", draw));
}

function draw() {
  this.style['background-color'] = `red`;
  this.style['opacity'] = .5;
};

function changeOpacity() {
  this.style['opacity'] += .1; 
};


function getRowsAndColumns () {
  let rows = prompt("How many rows would you like?");
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
  addEventOnMouseEnter();
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
