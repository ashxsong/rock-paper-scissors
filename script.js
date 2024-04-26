function getComputerChoice() {
  let num = Math.floor(Math.random() * 3);
  return (num === 0) ? "rock" :
  (num === 1) ? "paper" :
  "scissors";
}

function getHumanChoice() {
  let choice = "";
  while (choice != "rock" && choice != "paper" && choice != "scissors") {
    choice = prompt("Choice (rock, paper, or scissors): ");
    choice = choice.toLowerCase();
  }
  return choice;
}

function playRound(humanChoice, computerChoice) {
  let capitalHumanChoice = humanChoice[0].toUpperCase() + humanChoice.substr(1, humanChoice.length);
  let capitalComputerChoice = computerChoice[0].toUpperCase() + computerChoice.substr(1, computerChoice.length);
  if ((humanChoice == "rock" && computerChoice == "scissors") ||
      (humanChoice == "paper" && computerChoice == "rock") ||
      (humanChoice == "scissors" && computerChoice == "paper")) {
    return `You win! ${capitalHumanChoice} beats ${capitalComputerChoice}`;
  }
  else if (humanChoice == computerChoice) {
    return `It's a tie with ${capitalHumanChoice}!`;
  }
  else {
    return `You lose! ${capitalComputerChoice} beats ${capitalHumanChoice}`;
  }
}

const buttons = document.querySelectorAll("button");
const results = document.querySelector("#results");

buttons.forEach((button) => {
  button.addEventListener("click", () => {
    const result = document.createElement("p");
    result.textContent = playRound(button.id, getComputerChoice());
    results.appendChild(result);
  });
});