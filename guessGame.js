// Requirements of the Game:

// Input Guess --> From User
// Validate Guess --> Guess is a Number or not, is it between 1 and 100? also It will increment the number of guesses and
// Check Guess --> Guess is equal to generated random number, less than or greater than generated random number? It will tell the remaining guesses as well
// displayMessage --> display related info to the user about the guess
// startGame --> this will again start the game and reset all the values
// endGame --> this will end the game and disable the input

// 1. Generate the random number
let generatedRandomNumber = parseInt(Math.random() * 100 + 1);
// 2. Accessing multiple elements from HTML page and creating variables

const userInput = document.querySelector(".guessInput");
const form = document.querySelector(".form");
const p = document.querySelector(".p");
const previousGuessesSpan = document.querySelector(".prevGuess");
const remainingGuessesSpan = document.querySelector(".remainGuess");
const guessInformationDiv = document.querySelector(".guessInformationDiv");
let previousGuesses = [];
let numberOfGuesses = 1;

// 1. Display Message --> displays message to the User
const displayMessage = (message) => {
  p.innerHTML = `${message}`;
};

// 2. Start Game --> It will start the game again and reset all the values to default

const startGame = (button) => {
  button.remove();
  generatedRandomNumber = parseInt(Math.random() * 100 + 1);
  previousGuesses = [];
  numberOfGuesses = 1;
  previousGuessesSpan.innerHTML = "";
  remainingGuessesSpan.innerHTML = "";
  p.innerHTML = "";
  userInput.removeAttribute("disabled");
};

// 3. End Game --> This will end the game and Input field is no longer addable for the User

const endGame = () => {
  userInput.setAttribute("disabled", "true");
  let startGameButton = document.createElement("button");
  startGameButton.innerHTML = "Start Game";
  startGameButton.style.backgroundColor = "#fff";
  startGameButton.style.color = "#212121";
  startGameButton.setAttribute("class", "startGameButton");
  startGameButton.style.padding = "2%";
  startGameButton.style.border = "none";
  startGameButton.style.borderRadius = "5px";
  startGameButton.style.fontSize = "17px";
  startGameButton.style.cursor = "pointer";
  guessInformationDiv.appendChild(startGameButton);
  startGameButton.addEventListener("click", function () {
    startGame(startGameButton);
  });
};

// 4. Validate Guess --> This will validate the guess of the User to meet the current scenario of the Game

const validateGuess = (guess) => {
  const guessValue = parseInt(guess);
  switch (true) {
    case isNaN(guessValue):
      displayMessage("Please enter a valid Number");
      break;
    case guessValue < 1:
      displayMessage("Your guess value must be greater than 1");
      break;
    case guessValue > 100:
      displayMessage("Your guess value must be less than 100");
      break;
    case numberOfGuesses >= 10:
      switch (true) {
        case guessValue != generatedRandomNumber:
          previousGuesses.push(guess);
          previousGuessesSpan.innerHTML = `${previousGuesses}`;
          let remainingGuessesEnd = 10 - numberOfGuesses;
          remainingGuessesSpan.innerHTML = `${remainingGuessesEnd}`;
          displayMessage(
            `You are out of attempts!, the actual Number was ${generatedRandomNumber}`
          );
          endGame();
          break;
        default:
          p.innerHTML = "";
          checkGuess(guessValue);
          break;
      }
      break;
    default:
      p.innerHTML = "";
      checkGuess(guessValue);
      break;
  }
};

// 5. Check Guess --> This will check the guess with generated random number and notifiy the User accordingly

const checkGuess = (guess) => {
  previousGuesses.push(guess);
  previousGuessesSpan.innerHTML = `${previousGuesses}`;
  const remainingGuesses = 10 - numberOfGuesses;
  remainingGuessesSpan.innerHTML = `${remainingGuesses}`;
  numberOfGuesses++;
  switch (true) {
    case guess < generatedRandomNumber:
      displayMessage("Your guess value is too low");
      break;
    case guess > generatedRandomNumber:
      displayMessage("Your guess value is too high");
      break;
    default:
      displayMessage(
        `Wow, you won the game!, the actual Number was ${generatedRandomNumber}`
      );
      endGame();
      break;
  }
};

// 6. Form Submission --> This will execute the actual game when user submits his guess!

form.addEventListener("submit", function (e) {
  e.preventDefault();
  const userGuessNumber = userInput.value;
  userInput.value = "";
  validateGuess(userGuessNumber);
});
