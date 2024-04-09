const container = document.querySelector('#container');
// The number of modules (boxes) width and height has. Actual size of each
// module is defined in the styles.
let gridWidthModules = 16;
let gridHeightModules = 16;
let gridModulesTotal = gridWidthModules * gridHeightModules;

// Fill container with gridModulesTotal amount of modules as divs
function createGrid() {
    let gridRow = document.createElement('div');
    for (let  i = 0; i < gridModulesTotal; i++) {
        let gridModule = document.createElement('div');
        // Make a row container that holds gridWidthModules amount of columns
        if ((i % gridWidthModules === 0) && (i !== 0)) {
            gridRow = document.createElement('div');
            gridRow.setAttribute('class', 'row');
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

createGrid();