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
  
// const player1 = createPlayer1("Player1");
// const player2 = createPlayer2("Player2");

const boxes = document.querySelectorAll(".box");
boxes.forEach((box) => {
  box.addEventListener("click", function() {
    if (box.dataset.clicked === "false") {
      box.innerText = "X";
      box.dataset.clicked = "true";
    }
  });
});
