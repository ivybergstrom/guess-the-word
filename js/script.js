//UL that displays letters guessed
const ul = document.querySelector("ul");
//guess button
const guessButton = document.querySelector(".guess");
//letter input field
const input = document.querySelector("input");
//empty paragraph where word in progress will appear
const progress = document.querySelector(".word-in-progress");
//paragraph for remaining guesses in play
const remain = document.querySelector(".remaining");
//span inside the .remaining class, where remaining guesses will display
const span = document.querySelector("span");
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

guessButton.addEventListener = function (e) {
  e.preventDefault();
  //empty message paragraph
  message.innerText = " ";
  //grabbing input value
  const guess = input.value;
  //verifying that it is a single letter
  const goodGuess = validator(guess);

  if (goodGuess) {
    makeGuess(guess);
  }
};

//function to check players input
const validator = function () {
   const acceptedLetter = /[a-zA-Z]/

   if (input.value === " "){
     console.log("Please enter a single letter.");
   } else if (input.value === `${(number)+1}`) {
     console.log("Please enter a SINGLE letter.");
   } else if (input.value !== acceptedLetter) {
     console.log("Please enter a single LETTER.");
   } else {
     console.log("Great guess!");
     return;
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
