// Variables
let gridSize = 60 // 60x60 by default


// Selectors
const resizeGrid = document.querySelector('.resize-grid')
const resetGrid = document.querySelector('.reset-grid')
const grid = document.querySelector('.grid')
const gridCells = grid.childNodes


// Colours
const rubberButton = document.querySelector('.rubber')
const purpleButton = document.querySelector('.purple')
const redButton = document.querySelector('.red')
const orangeButton = document.querySelector('.orange')
const greenButton = document.querySelector('.green')
const blueButton = document.querySelector('.blue')
const blackButton = document.querySelector('.black')


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
rubberButton.addEventListener('click', () => {
    draw(gridCells, '#C0C0C0')
})
purpleButton.addEventListener('click', () => {
    draw(gridCells, '#80006E')
})
redButton.addEventListener('click', () => {
    draw(gridCells, '#EC021F')
})
orangeButton.addEventListener('click', () => {
    draw(gridCells, '#EC7421')
})
greenButton.addEventListener('click', () => {
    draw(gridCells, '#9BCC56')
})
blueButton.addEventListener('click', () => {
    draw(gridCells, '#5AA3D2')
})
blackButton.addEventListener('click', () => {
    draw(gridCells, '#303032')
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



