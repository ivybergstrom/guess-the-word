//UL that displays letters guessed
const guessedUL = document.querySelector(".guessed-letters");
//guess button
const guessButton = document.querySelector(".guess");
//letter input field
const input = document.querySelector(".letter");
//empty paragraph where word in progress will appear
const progress = document.querySelector(".word-in-progress");
//paragraph for remaining guesses in play
const remain = document.querySelector(".remaining");
//span inside the .remaining class, where remaining guesses will display
const span = document.querySelector(".remaining span");
//empty paragraph that will display messages that encourage the player to guess
const message = document.querySelector(".message");
//play again button, initially hidden
const playButton = document.querySelector(".play-again");
//test word
const word = "magnolia";
//will contain all the letters that have been guessed
const guessedLetters = [];


//function to hold circle symbols in place of letters
const circle = function (word){
  const placeHolderLetters = [];
  for (const letter of word) {
    console.log(letter);
    placeHolderLetters.push("●");
  }
  progress.innerText = placeHolderLetters.join("  ");
};
circle(word);

guessButton.addEventListener = ("click", function (e) {
  e.preventDefault();
  //empty message paragraph
  message.innerText = "";
  //grabbing input value
  const guess = input.value;
  //verifying that it is a single letter
  const goodGuess = validator(guess);

  if (goodGuess) {
    makeGuess(guess);
  } else {
    displayGuessedLetters();
  }
  input.value = " ";
});

//function to check players input
const validator = function (input) {
   const acceptedLetter = /[a-zA-Z]/;
   if (input.length === 0) {
     message.innerText = "Please enter a letter.";
   } else if (input.length > 1) {
     message.innerText = "Please enter a SINGLE letter.";
   } else if (!input.match(acceptedLetter)) {
     message.innerText = "Please enter a single LETTER.";
   } else {
     return input;
   }
};

const makeGuess = function (guess) {
guess = guess.toUpperCase();
//checks to see if  this letter has been guessed
if (guess.includes.guessedLetters) {
  console.log("You already guessed that one, silly! Try a new letter.");
} else {
  guessedLetters.push(`${guess}`);
}
console.log(guessedLetters);
};

const displayGuessedLetters = function () {
  //emptying innerHTML to display nothing
  guessedUL.innterHTML = " ";
  //turning guessed letters into html elements so they can show on the page
  for (const letter of guessedLetters) {
    const letterLI = document.createElement("li");
    guessedUL.append("letterLI");
}

};
