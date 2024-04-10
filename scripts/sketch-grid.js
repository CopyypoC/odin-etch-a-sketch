const container = document.querySelector('#container');
const newGrid = document.querySelector('#new-grid');
// The number of modules (boxes) width and height has. Actual size of each
// module is defined in the styles.
let gridWidthModules = 16;
let gridHeightModules = 16;

// Fill container with gridModulesTotal amount of modules as divs
function createGrid(gridWidthModules, gridHeightModules) {
    let gridModulesTotal = gridWidthModules * gridHeightModules;
    let gridRow = document.createElement('div');
    for (let  i = 0; i < gridModulesTotal; i++) {
        let gridModule = document.createElement('div');
        // Make a row container that holds gridWidthModules amount of columns
        if ((i % gridWidthModules === 0) && (i !== 0)) {
            gridRow = document.createElement('div');
            gridRow.setAttribute('class', 'row');
        // First row is initialized so can't reassign to a new element yet
        } else if ((i % gridWidthModules === 0) && (i === 0)) {
            gridRow.setAttribute('class', 'row');
        }
        gridModule.setAttribute('class', 'column');
        gridRow.appendChild(gridModule);
        container.appendChild(gridRow);
    }
    // Change module color on hover
    container.addEventListener('mouseover', (e) => {
        let target = e.target;
        if (target.className === 'column') {
            target.setAttribute('style', 'background-color: black');
        }
    })
}

function removeAllChildren(element) {
    while (element.firstChild) {
        element.removeChild(element.firstChild);
    }
}

// Make button reset grid on click and prompt for new grid dimensions
newGrid.addEventListener('click', () => {
    // Reset the container
    removeAllChildren(container);
    // Prompt user for new width and height
    gridWidthModules = prompt(`New grid width: (1 - 100 otherwise will default to 16)`);
    gridHeightModulesModules = prompt(`New grid height: (1 - 100 otherwise will default to 16)`);
    if (!((gridWidthModules >= 1) && (gridWidthModules <= 100))) {
        gridWidthModules = 16;
    }
    if (!((gridHeightModules >= 1) && (gridHeightModules <= 100))) {
        gridHeightModules = 16;
    }    
    // Create grid with user input
    createGrid(gridWidthModules, gridHeightModules);
});

createGrid(gridWidthModules, gridWidthModules);