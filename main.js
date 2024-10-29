const buttons = document.querySelectorAll(".btn");
const resultDisplay = document.getElementById("result");

function computerPlay() {
  const choice = ["Rock", "Paper", "Scissors"];
  return choice[Math.floor(Math.random() * choice.length)];
}

function playRound(playerSelection) {
  const computerSelection = computerPlay();
  let result;

  if (computerSelection === playerSelection) {
    result = "It's a draw!";
  } else if (
    (computerSelection === "Rock" && playerSelection === "Scissors") ||
    (computerSelection === "Paper" && playerSelection === "Rock") ||
    (computerSelection === "Scissors" && playerSelection === "Paper")
  ) {
    result = "Computer wins!";
  } else {
    result = "Player wins!";
  }

  resultDisplay.textContent = `Computer chose: ${computerSelection}. ${result}`;
}

buttons.forEach((button) => {
  button.addEventListener("click", () => {
    const playerSelection = button.dataset.choice;
    playRound(playerSelection);
  });
});
