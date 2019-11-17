// Variables

let userScore = 0;
let rivalScore = 0;
let gamesPlayedNumber = 0;

// Cache the DOM

// User Score
const userScore_span = document.querySelector("#user-score");
const rivalScore_span = document.querySelector("#rival-score");

// Scoreboard
const scoreboard_section = document.querySelector("#scoreboard");

// Games played
const gamesPlayed = document.querySelector("#games-played");

// Result
const result_span = document.querySelector("#result");

// Choices

const rock_div = document.querySelector("#rock");
const paper_div = document.querySelector("#paper");
const scissors_div = document.querySelector("#scissors");

// ====================================================================================================
// This is a common method needed in most apps.
// You should be able to make this more generic to be able to capitalise any word, not just the choices.
//
function convertToWord(word) {
  if (word === "rock") return "Rock";
  if (word === "paper") return "Paper";
  else {
    return "Scissors";
  }
}

// ====================================================================================================

function getRivalChoice() {
  const choices = ["rock", "paper", "scissors"];
  const randomNumber = Math.floor(Math.random() * 3);
  return choices[randomNumber];
}

// ====================================================================================================
// These functions all do the same thing.
// Refactor so that everything can be lumped into one function.
// Initial thought; IF statements.

function win(userChoice, rivalChoice) {
  const smallYouWord = "You".fontsize(3).sup();
  const smallRivalWord = "Rival".fontsize(3).sup();
  const userChoice_div = document.getElementById(userChoice);
  userScore++;
  userScore_span.innerHTML = userScore;
  gamesPlayedNumber++;
  gamesPlayed.innerHTML = gamesPlayedNumber;
  result_span.innerHTML = `${convertToWord(
    userChoice
  )}${smallYouWord} beats ${convertToWord(
    rivalChoice
  )}${smallRivalWord}. You win!`;
  userChoice_div.classList.add("green-glow");
  setTimeout(() => {
    userChoice_div.classList.remove("green-glow");
  }, 1000);
}

function lose(userChoice, rivalChoice) {
  const smallYouWord = "You".fontsize(3).sup();
  const smallRivalWord = "Rival".fontsize(3).sup();
  const userChoice_div = document.getElementById(userChoice);
  rivalScore++;
  rivalScore_span.innerHTML = rivalScore;
  gamesPlayedNumber++;
  gamesPlayed.innerHTML = gamesPlayedNumber;
  result_span.innerHTML = `${convertToWord(
    userChoice
  )}${smallYouWord} loses to ${convertToWord(
    rivalChoice
  )}${smallRivalWord}. You lose`;
  userChoice_div.classList.add("red-glow");
  setTimeout(() => {
    userChoice_div.classList.remove("red-glow");
  }, 1000);
}

function draw(userChoice, rivalChoice) {
  const smallYouWord = "You".fontsize(3).sup();
  const smallRivalWord = "Rival".fontsize(3).sup();
  const userChoice_div = document.getElementById(userChoice);
  gamesPlayedNumber++;
  gamesPlayed.innerHTML = gamesPlayedNumber;
  result_span.innerHTML = `${convertToWord(
    userChoice
  )}${smallYouWord} matches ${convertToWord(
    rivalChoice
  )}${smallRivalWord}. You draw`;
  userChoice_div.classList.add("orange-glow");
  setTimeout(() => {
    userChoice_div.classList.remove("orange-glow");
  }, 1000);
}

// ====================================================================================================

// ====================================================================================================
// There has to be some other way to do this. However, even Thef is at a loss of how to do it.
function game(userChoice) {
  const rivalChoice = getRivalChoice();
  switch (userChoice + rivalChoice) {
    case "rockscissors":
    case "paperrock":
    case "scissorspaper":
      win(userChoice, rivalChoice);
      break;
    case "rockpaper":
    case "paperscissors":
    case "scissorsrock":
      lose(userChoice, rivalChoice);
      break;
    case "rockrock":
    case "paperpaper":
    case "scissorsscissors":
      draw(userChoice, rivalChoice);
      break;
  }
}

// ====================================================================================================

// ====================================================================================================
// Look into Event Delegation and get this into one event listener.
function main() {
  rock_div.addEventListener("click", function() {
    game("rock");
  });

  paper_div.addEventListener("click", function() {
    game("paper");
  });

  scissors_div.addEventListener("click", function() {
    game("scissors");
  });
}

// ====================================================================================================

main();
