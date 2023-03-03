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

// Checks which player clicked the box and mentions it on the box.
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
    checkWinner();
}
}) });

// Check the winner
function checkWinner() {
    const winningCombinations = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 4, 8],
    [2, 4, 6],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
]; 
    for (i = 0; i<winningCombinations.length; i++) {
    const [a, b, c] = winningCombinations[i];
    const box1 = boxes[a];
    const box2 = boxes[b];
    const box3 = boxes[c];
    
    if(box1.dataset.status === "Player1" &&
       box2.dataset.status === "Player1" &&
       box3.dataset.status === "Player1") {
    console.log("Player1 Won");
}   else if (box1.dataset.status === "Player2" &&
    box2.dataset.status === "Player2" &&
    box3.dataset.status === "Player2") {
    console.log("Player2 Won");
    }
}  } 
// Records the player movement
const container = document.querySelector('.container');
container.addEventListener('click', function(event) {
  const clickedBox = event.target.closest('.box');
  if (clickedBox && clickedBox.dataset.clicked === "true") {
    const status = clickedBox.dataset.status;
    if (status === "Player1") {
      console.log("Player1");
    } else if (status === "Player2") {
      console.log("Player2");
    }
  }
});
