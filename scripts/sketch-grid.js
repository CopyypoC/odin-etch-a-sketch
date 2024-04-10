const container = document.querySelector('#container');
const newGrid = document.querySelector('#new-grid');
const clearGrid = document.querySelector('#clear-grid');
// The number of modules (boxes) width and height has. Actual size of each
// module is defined in the styles. Default: 16
let gridSize = 16;

// Event listener callback to change module color on hover
function colorGridModule(event) {
    let module = event.target;
    if (module.className === 'column' && event.buttons === 1) {
        module.setAttribute('style', `background-color: black`);
    }
}

// Fill container with total amount of modules as divs
function createGrid(gridSize, hasHoverEvent = false) {
    let gridRow = document.createElement('div');
    for (let  i = 0; i < gridSize * gridSize; i++) {
        let gridModule = document.createElement('div');
        // Make a row container that holds width amount of columns
        if ((i % gridSize === 0) && (i !== 0)) {
            gridRow = document.createElement('div');
            gridRow.setAttribute('class', 'row');
        // First row is already initialized so can't reassign to a new element yet
        } else if ((i % gridSize === 0) && (i === 0)) {
            gridRow.setAttribute('class', 'row');
        }
        gridModule.setAttribute('class', 'column');
        gridRow.appendChild(gridModule);
        container.appendChild(gridRow);
    }
    if (!hasHoverEvent) {
        container.addEventListener('mouseover', (e) => {
            colorGridModule(e);
        });
        hasHoverEvent = true;
    }
}

function removeAllChildren(element) {
    while (element.firstChild) {
        element.removeChild(element.firstChild);
    }
}

// Make button reset grid on click and prompt for new grid dimensions
newGrid.addEventListener('click', () => {
    let hasHoverEvent = true;
    // Reset the container
    removeAllChildren(container);
    // Prompt user for new size
    gridSize = Number(prompt(`New grid size: (1 - 100 otherwise will default to 16)`));   
    if (!((gridSize >= 1) && (gridSize <= 100))) {
        gridSize = 16;
    }
    if (!((gridSize >= 1) && (gridSize <= 100))) {
        gridSize = 16;
    }    
    // Create new grid with user input
    createGrid(gridSize, hasHoverEvent);
});

clearGrid.addEventListener('click', () => {
    let hasHoverEvent = true;
    removeAllChildren(container);
    createGrid(gridSize, hasHoverEvent);
})

// Initial grid of 16x16
createGrid(gridSize);

// Select color from picker or random
// Pass color to colorgrid function
// if random color, use random number generator
// else use given color