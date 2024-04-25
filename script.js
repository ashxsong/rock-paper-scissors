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

function playGame() {
  let humanScore = 0;
  let computerScore = 0;
  for (let i = 0; i < 5; i++) {
    const humanSelection = getHumanChoice();
    const computerSelection = getComputerChoice();
    let round = playRound(humanSelection, computerSelection);
    if (round == "human") {
      humanScore++;
    }
    if (round == "computer") {
      computerScore++;
    }
    console.log("Human Score: " + humanScore);
    console.log("Computer Score: " + computerScore);
    console.log("");
  }
  if (humanScore < computerScore) {
    console.log("You lose!");
  }
  else if (humanScore > computerScore) {
    console.log("You win!");
  }
  else {
    console.log("It's a tie!");
  }
}

playGame();