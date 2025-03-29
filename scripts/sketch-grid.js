const gridContainer = document.querySelector('#grid-container');
const newGrid = document.querySelector('#new-grid');
const clearGrid = document.querySelector('#clear-grid');
const colorPicker = document.querySelector('#color-picker');
let color = 'black';
// The number of modules (boxes) width and height has. Actual size of each
// module is defined in the styles. Default: 16
let gridSize = 16;

const setColor = (e) => {
    let module = e.target;
    if (module.className === 'column' && e.buttons === 1) {
        module.setAttribute('style', `background-color: ${color}`);
    }
}

// Event listener callback to change module color on hover
function colorGridModule(hasNewColor = false) {
    // If a new color is sent, delete old event listener
    if (hasNewColor) {
        removeEventListener('mouseover', setColor);
    }
    gridContainer.addEventListener('mousedown', setColor);
    gridContainer.addEventListener('mouseover', setColor);
    gridContainer.addEventListener('dragstart', (e) => e.preventDefault());
}

// Fill gridContainer with total amount of modules as divs
function createGrid(gridSize) {
    let gridRow = document.createElement('div');
    for (let  i = 0; i < gridSize * gridSize; i++) {
        let gridModule = document.createElement('div');
        // Make a row gridContainer that holds width amount of columns
        if ((i % gridSize === 0) && (i !== 0)) {
            gridRow = document.createElement('div');
            gridRow.setAttribute('class', 'row');
        // First row is already initialized so can't reassign to a new element yet
        } else if ((i % gridSize === 0) && (i === 0)) {
            gridRow.setAttribute('class', 'row');
        }
        gridModule.setAttribute('class', 'column');
        gridRow.appendChild(gridModule);
        gridContainer.appendChild(gridRow);
    }
    colorGridModule();
}

function removeAllChildren(element) {
    while (element.firstChild) {
        element.removeChild(element.firstChild);
    }
}

// Make button reset grid on click and prompt for new grid dimensions
newGrid.addEventListener('click', () => {
    // Reset the gridContainer
    removeAllChildren(gridContainer);
    // Prompt user for new size
    gridSize = Number(prompt(`New grid size: (1 - 100 otherwise will default to 16)`));   
    if (!((gridSize >= 1) && (gridSize <= 100))) {
        gridSize = 16;
    }
    if (!((gridSize >= 1) && (gridSize <= 100))) {
        gridSize = 16;
    }    
    // Create new grid with user input
    createGrid(gridSize);
});

clearGrid.addEventListener('click', () => {
    removeAllChildren(gridContainer);
    createGrid(gridSize);
});

// Initial grid of 16x16
createGrid(gridSize);

colorPicker.addEventListener('input', () => {
    let hasNewColor = true;
    color = colorPicker.value
    colorGridModule(hasNewColor);
});
