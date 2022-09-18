const choiceArr = ["Rock", "Paper", "Scissors"];
let playerWinCount = 0;
let compWinCount = 0;
let playerSelection;
let computerSelection;

// function game() {
//   // starts 5 rounds game
//   for (i = 0; i < 5; i++) {
//     console.log(playRound());
//   }
//   if (playerWinCount > compWinCount) {
//     console.log("Overall Win!!!");
//   } else if (playerWinCount < compWinCount) {
//     console.log("Complete Lose!!!");
//   } else {
//     console.log("Tie!!!");
//   }
// }

function getComputerChoice() {
  //random computer choice
  let compChoice = choiceArr[Math.floor(Math.random() * choiceArr.length)];
  return compChoice;
}
// function caseSensePlayer() {
//   // Insensetizing player's entry
//   let playerInput = prompt("Your choice: ");
//   let insensitize =
//     playerInput.slice(0, 1).toUpperCase() +
//     playerInput.slice(1, 8).toLowerCase();

//   return insensitize;
// }

// function getPlayerButton() {
//   for (button of btn) {
//     button.addEventListener("click", (e) => {
//       playerButton = e.target.textContent;
//       // console.log(playerButton);

//       return playerButton;
//     });
//   }
// }

function playRound(playerSelection, computerSelection) {
  let btn = document.getElementsByTagName("button");
  for (button of btn) {
    button.addEventListener("click", (e) => {
      playerSelection = e.target.textContent;

      computerSelection = getComputerChoice();
      document.querySelector(
        ".para"
      ).firstChild.textContent = `You: ${playerSelection}`;
      document.querySelector(
        ".para"
      ).lastChild.textContent = `Computer: ${computerSelection}`;

      if (playerSelection === computerSelection) {
        document.querySelector("h1").textContent = "Draw";
      } else if (
        (playerSelection === choiceArr[0] &&
          computerSelection === choiceArr[2]) ||
        (playerSelection === choiceArr[1] &&
          computerSelection === choiceArr[0]) ||
        (playerSelection === choiceArr[2] && computerSelection === choiceArr[1])
      ) {
        // playerWinCount += 1;
        runningScorePlayer();
        console.log(playerWinCount);
        document.querySelector("h1").textContent = "You Win!";
      } else if (
        (playerSelection === choiceArr[2] &&
          computerSelection === choiceArr[0]) ||
        (playerSelection === choiceArr[0] &&
          computerSelection === choiceArr[1]) ||
        (playerSelection === choiceArr[1] && computerSelection === choiceArr[2])
      ) {
        // compWinCount += 1;
        runningScoreComp();
        document.querySelector("h1").textContent = "You Lose!";
      }
      winnerAnnouncement();
    });
  }
}
playRound();
// game();

function runningScorePlayer() {
  playerWinCount += 1;
  document.querySelector(".score").firstChild.textContent = playerWinCount;
}

function runningScoreComp() {
  compWinCount += 1;
  document.querySelector(".score").lastChild.textContent = compWinCount;
}

function winnerAnnouncement() {
  if (playerWinCount === 5) {
    document.querySelector("h1").textContent = "TOTAL WIN!";
    setTimeout(() => {
      document.location.reload();
    }, 5000);
    setTimeout(
      () => (document.querySelector("h1").textContent = "Play Again"),
      3000
    );
  } else if (compWinCount === 5) {
    document.querySelector("h1").textContent = "TOTAL LOST!";
    setTimeout(() => {
      document.location.reload();
    }, 5000);
    setTimeout(
      () => (document.querySelector("h1").textContent = "Play Again"),
      3000
    );
  }
}
