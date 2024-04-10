const container = document.querySelector('#container');
const newGrid = document.querySelector('#new-grid');
// The number of modules (boxes) width and height has. Actual size of each
// module is defined in the styles. Default: 16
let gridWidthModules = 16;
let gridHeightModules = 16;

// Event listener callback to change module color on hover
function colorModule(event) {
    let module = event.target;
    if (module.className === 'column' && event.buttons === 1) {
        module.setAttribute('style', 'background-color: black');
    }
}

// Fill container with total amount of modules as divs
function createGrid(gridWidthModules, gridHeightModules, hasHoverEvent = false) {
    let gridModulesTotal = gridWidthModules * gridHeightModules;
    let gridRow = document.createElement('div');
    for (let  i = 0; i < gridModulesTotal; i++) {
        let gridModule = document.createElement('div');
        // Make a row container that holds width amount of columns
        if ((i % gridWidthModules === 0) && (i !== 0)) {
            gridRow = document.createElement('div');
            gridRow.setAttribute('class', 'row');
        // First row is already initialized so can't reassign to a new element yet
        } else if ((i % gridWidthModules === 0) && (i === 0)) {
            gridRow.setAttribute('class', 'row');
        }
        gridModule.setAttribute('class', 'column');
        gridRow.appendChild(gridModule);
        container.appendChild(gridRow);
    }
    if (!hasHoverEvent) {
        container.addEventListener('mouseover', colorModule);
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
    // Prompt user for new width and height
    gridWidthModules = Number(prompt(`New grid width: (1 - 100 otherwise will default to 16)`));
    gridHeightModules = Number(prompt(`New grid height: (1 - 100 otherwise will default to 16)`));
    if (!((gridWidthModules >= 1) && (gridWidthModules <= 100))) {
        gridWidthModules = 16;
    }
    if (!((gridHeightModules >= 1) && (gridHeightModules <= 100))) {
        gridHeightModules = 16;
    }    
    // Create new grid with user input
    createGrid(gridWidthModules, gridHeightModules, hasHoverEvent);
});

// Initial grid of 16x16
createGrid(gridWidthModules, gridWidthModules);