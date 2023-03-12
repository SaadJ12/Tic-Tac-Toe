const gameboard = {
    board: [0, 0],
};


const displayboard = document.querySelector(".gameboard");
displayboard.innerText = "Gameboard:" + " " +  gameboard.board.join(', ');

let player1 = "Player 1"
let player2 = "Player 2";

// Function to create players name 
function createPlayer1(playerName) {
    player1 = playerName;
}

function createPlayer2(playerName) {
    player2 = playerName;
}

const player1Input = document.querySelector('#player1-input');
const player2Input = document.querySelector('#player2-input');
player1Input.addEventListener('input', function() {
    createPlayer1(player1Input.value);
})
player2Input.addEventListener("input", function() {
    createPlayer2(player2Input.value);
})

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
    tieCheck();
}
}) });



// Check the winner
const winner = document.querySelector(".winner");
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
        gameboard.board[0] = parseInt(gameboard.board[0]) + 1;
        displayboard.innerText = "Gameboard:" + " " + gameboard.board.join(', ');
        winner.innerText = player1 + " won!";
        console.log("Player1 Won");
}       else if (box1.dataset.status === "Player2" &&
        box2.dataset.status === "Player2" &&
        box3.dataset.status === "Player2") {
        gameboard.board[1] = parseInt(gameboard.board[1]) + 1;
        displayboard.innerText = "Gameboard:" + " " + gameboard.board.join(', ');
        winner.innerText = player2 + " won!"
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
}   else if (status === "Player2") {
    console.log("Player2");
    }
  }
});
// This function checks for tie
function tieCheck() {
    let allBoxesClicked = true;
    boxes.forEach((box) => {
    if (box.dataset.clicked !== "true") {
    allBoxesClicked = false;
      }
    });
    if (allBoxesClicked) {
      console.log("Its a Tie");
      reset();
    }
  }

// Reset the position of players and rounds but gameboard doesn't reset.  
function reset() {
        boxes.forEach((box) => {
        round = 0;
        box.innerText = "";
        box.dataset.status = "false";
        box.dataset.clicked = "false";
    })
}

const restart = document.querySelector('.restart');
restart.addEventListener('click', function() {
    reset();
})

// to completely restart the game including gameboard
function refreshPage() {
    location.reload();
}

const refresh = document.querySelector(".refresh");
refresh.addEventListener('click', function() {
    refreshPage();
})