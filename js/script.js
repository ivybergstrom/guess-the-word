//UL that displays letters guessed
const guessedLetters = document.querySelector("ul");
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
  const entryLetter = input.value;
  console.log(entryLetter);
  input.value = " ";
};
