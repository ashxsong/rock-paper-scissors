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

let rounds = 0;
let humanScore = 0;
let computerScore = 0;

buttons.forEach((button) => {
  button.addEventListener("click", () => {
    let result = document.createElement("p");
    result.textContent = playRound(button.id, getComputerChoice());
    if (result.textContent.substring(4, 5) === "w") {
      humanScore++;
    }
    if (result.textContent.substring(4, 5) === "l") {
      computerScore++;
    }
    rounds++;
    let roundNumber = document.createElement("h3");
    let humanResult = document.createElement("p");
    let computerResult = document.createElement("p");
    let finalResult = document.createElement("h3");
    roundNumber.textContent = "Round " + rounds;
    humanResult.textContent = "Your score: " + humanScore;
    computerResult.textContent = "Computer score: " + computerScore;
    results.appendChild(roundNumber);
    results.appendChild(result);
    results.appendChild(humanResult);
    results.appendChild(computerResult);
    if (humanScore === 5) {
      finalResult.textContent = "You win!"
      buttons.forEach((button) => {
        button.disabled = true;
      })
      results.appendChild(finalResult);
    }
    if (computerScore === 5) {
      finalResult.textContent = "You lose!"
      buttons.forEach((button) => {
        button.disabled = true;
      })
      results.appendChild(finalResult);
    }
  });
});