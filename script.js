let gridSize = 16;

function createGrid() {
    gridSize = prompt("Enter the number of squares per side for the new grid (max 100):", gridSize);


if (gridSize > 100) {
    gridSize = 100;
}

const container = document.querySelector(".container");
while (container.firstChild) {
    container.removeChild(container.firstChild);
}

for (let i = 0; i < gridSize; i++) {
    for (let j = 0; j <gridSize; j++) {
        let square = document.createElement("div");
        square.classList.add("square");
        square.id=`square_${i}_${j}`;
        container.appendChild(square);
    }
}

const gridDivs = document.querySelectorAll(".square");

gridDivs.forEach(div => {
    div.addEventListener("mouseover", function(){
        this.classList.add("hovered");
    });
});

let squareSize = 960 / gridSize;
let squares = document.querySelectorAll('.square');
squares.forEach(function(square) {
    square.style.width = squareSize + 'px';
    square.style.height = squareSize + 'px';
});
}

createGrid();