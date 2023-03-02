const gameboard = {
    board: ["X", "O"],
};

const displayboard = document.querySelector(".gameboard");
displayboard.innerText = "gameboard:" + " " +  gameboard.board.join(', ');

let player1;
let player2 = "Computer";

function createPlayer1(playerName) {
    player1 = playerName;
}

function createPlayer2(playerName) {
    player2 = playerName;
}

let round = 0;
const boxes = document.querySelectorAll(".box");
boxes.forEach((box) => {
  box.addEventListener("click", function() {
    if (box.dataset.clicked === "false") {
    if (round % 2 === 0) {
    box.innerText = "X";
    box.dataset.status = "Player1";
    } else {
    box.innerText = "O";
    box.dataset.status = "Player2";
    }
    round++;
    box.dataset.clicked = "true";
    boxes.forEach((box) => {
    if (box.dataset.status === "Player1") {
    console.log("Player1");
    } else if (box.dataset.status === "Player2") {
    console.log("Player2");
    }
    box.dataset.status = "";  
});
}
});
});