let board = document.querySelector(".board")
console.log(board)
board.style.gridTemplateColumns = "repeat(16, 1fr)"
board.style.gridTemplateRows = "repeat(16, 1fr)"

for (let i = 0; i < 256; i++){
    let square = document.createElement("div")
    square.style.border = "1px solid #000000"; 
    square.style.height = "30px";
    square.style.width = "30px";
    square.style.marginLeft = "0px";
    square.style.marginRight = "0px";

    board.insertAdjacentElement("beforeend", square)
}

