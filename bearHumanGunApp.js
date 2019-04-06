function getUserChoice(userInput) {
  userInput = userInput.toLowerCase();
  if (userInput === "bear" || userInput === "gun" || userInput === "human") {
    return userInput;
  } else {
    return "Please enter a valid option";
  }
}

function getComputerChoice() {
  let randonNumber = Math.floor(Math.random()) * 3;
  if (randonNumber === 0) {
    return "gun";
  }
  if (randonNumber === 1) {
    return "human";
  }
  if (randonNumber === 2) {
    return "bear";
  }
}

function determineWinner(userChoice, computerChoice) {
  if (userChoice === computerChoice) {
    return "It is a tie!";
  }
  if (userChoice === "human") {
    if (computerChoice === "bear") {
      return "you habe been mauled by bear!";
    } else {
      return "you have disarmed a gun";
    }
  }
  if (userChoice === "bear") {
    if (computerChoice === "gun") {
      return "You have been shot by a gun";
    } else {
      return "you have mauled a human";
    }
  }
  if (userChoice === "gun") {
    if (computerChoice === "human") {
      return "Your gun has beenn disarmed";
    } else {
      ("You have shot a bear");
    }
  }
}

//console.log(determineWinner("gun", "human"));

function playGame() {
  //let promptUserChoice = prompt("Please choose bear, human, gun");
  let userChoice = getUserChoice("bear");
  let computerChoice = getComputerChoice();
  console.log(userChoice);
  console.log(computerChoice);
  console.log(determineWinner(userChoice, computerChoice));
}
console.log(playGame());
