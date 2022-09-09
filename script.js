const choiceArr = ["Rock", "Paper", "Scissors"];
let playerCount = 0;
let compCount = 0;

function game() {
  for (i = 0; i < 5; i++) {
    console.log(playRound());
  }
  if (playerCount > compCount) {
    console.log("Overall Win!!!");
  } else if (playerCount < compCount) {
    console.log("Complete Lose!!!");
  } else {
    console.log("Tie!!!");
  }
}

let playerSelection;

function getComputerChoice() {
  let compChoice = choiceArr[Math.floor(Math.random() * choiceArr.length)];
  return compChoice;
}
function caseSensePlayer() {
  let playerInput = prompt("Your choice: ");
  let insentsitized =
    playerInput.slice(0, 1).toUpperCase() +
    playerInput.slice(1, 8).toLowerCase();

  return insentsitized;
}

let computerSelection;

function playRound(playerSelection, computerSelection) {
  playerSelection = caseSensePlayer();
  computerSelection = getComputerChoice();
  console.log(playerSelection, computerSelection);
  if (playerSelection === computerSelection) {
    return "Draw!";
  } else if (
    (playerSelection === choiceArr[0] && computerSelection === choiceArr[2]) ||
    (playerSelection === choiceArr[1] && computerSelection === choiceArr[0]) ||
    (playerSelection === choiceArr[2] && computerSelection === choiceArr[1])
  ) {
    playerCount += 2;
    return "You Win!";
  } else if (
    (playerSelection === choiceArr[2] && computerSelection === choiceArr[0]) ||
    (playerSelection === choiceArr[0] && computerSelection === choiceArr[1]) ||
    (playerSelection === choiceArr[1] && computerSelection === choiceArr[2])
  ) {
    compCount += 2;
    return "You Lose!";
  }
}
game();
//
