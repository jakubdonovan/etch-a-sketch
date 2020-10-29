// Variables
let gridSize = 60 // 60x60 by default


// Selectors
const grid = document.querySelector('.grid')
const gridCells = grid.childNodes
const resizeGrid = document.querySelector('.resize-grid')
const resetGrid = document.querySelector('.reset-grid')
const colourOptions = document.querySelectorAll('.colour-tools img')


// Colours
const colours = { 'rubber': '#C0C0C0', 'purple': '#80006E', 'red': '#EC021F', 'orange': '#EC7421', 
                    'green': '#9BCC56', 'blue': '#5AA3D2', 'black': '#303032' }


// Listeners
resizeGrid.addEventListener('click', () => {
    gridSize = parseInt(prompt('Enter your grid size'))
    clearGrid(grid)
    createGrid(gridSize)
})
resetGrid.addEventListener('click', () => {
    clearGrid(grid)
    createGrid(gridSize)
})
colourOptions.forEach(option => {
    option.addEventListener('click', () => {
        let colour = colours[option.className]

        draw(gridCells, colour)
    })
})


// Functions 
const createGrid = gridSize => {
    grid.style.gridTemplate = `repeat(${gridSize}, 1fr) / repeat(${gridSize}, 1fr)`
    
    for(let i = 0; (gridSize * gridSize) > i; i++){
        let cell = document.createElement("div")
        cell.className = "grid-cell"
        cell.id = i;
        grid.appendChild(cell)
    }

    draw(gridCells)
}

const clearGrid = (parent) => {
    while (parent.lastChild) parent.removeChild(parent.lastChild)
}

const draw = (gridCells, colour) => {
    gridCells.forEach(cell => {
        cell.addEventListener('mouseover', function() {
            this.style.background = colour
        })
    })
}



// Initialize
createGrid(gridSize)





// /////////////////////
// // TO FINISH
// ////////////////////


// // Create cursor
// let createCursor = document.createElement("div")
// createCursor.className = "cursor"
// canvas.firstChild.appendChild(createCursor)

// // Style cursor
// const cursor = document.querySelector(".cursor")
// cursor.style.height = '100%'
// cursor.style.width = '100%'
// cursor.style.background = '#000000'

// // Move cursor
// let currentCursorPosition = 0
// let nextCursorPosition = (currentCursorPosition) + gridSize

// window.addEventListener('keydown', event => {

//     const findCursorMoveDown = () => {
//         canvas.childNodes.forEach(cell => {
//             return cell.hasChildNodes() ? currentCursorPosition = parseInt(cell.id) : false
//         })

//         canvas.children[nextCursorPosition].appendChild(cursor)
//     }


//     switch(event.key){
//         // case 'ArrowUp':
//         //     break

//         case 'ArrowDown':
//             findCursorMoveDown()

//             break
//         // case 'ArrowLeft':
//         //     break
//         // case 'ArrowRight':
//         //     break
//     }
// })



