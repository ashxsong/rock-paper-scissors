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
    console.log(`You win! ${capitalHumanChoice} beats ${capitalComputerChoice}`);
    return "human";
  }
  else if (humanChoice == computerChoice) {
    console.log(`It's a tie with ${capitalHumanChoice}!`);
    return "none";
  }
  else {
    console.log(`You lose! ${capitalComputerChoice} beats ${capitalHumanChoice}`);
    return "computer";
  }
}

const buttons = document.querySelectorAll("button");

buttons.forEach((button) => {
  button.addEventListener("click", () => {
    playRound(button.id, getComputerChoice());
  });
});