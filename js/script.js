const guessedUL = document.querySelector(".guessed-letters"); //UL that displays letters guessed
const guessButton = document.querySelector(".guess"); //guess button
const letterInput = document.querySelector(".letter");//letter input field
const progress = document.querySelector(".word-in-progress"); //empty paragraph where word in progress will appear
const remain = document.querySelector(".remaining"); //paragraph for remaining guesses in play
const span = document.querySelector(".remaining span"); //span inside the .remaining class, where remaining guesses will display
const message = document.querySelector(".message"); //empty paragraph that will display messages that encourage the player to guess
const playButton = document.querySelector(".play-again"); //play again button, initially hidden

let word = "magnolia"; //test word
const guessedLetters = []; //will contain all the letters that have been guessed
let remainingGuesses = 8; //global variable to track the number of guesses allowed

//function to pull random words from API
const getWord = async function () {
  const get = await fetch("https://gist.githubusercontent.com/skillcrush-curriculum/7061f1d4d3d5bfe47efbfbcfe42bf57e/raw/5ffc447694486e7dea686f34a6c085ae371b43fe/words.txt");
  const wordsApi = await get.text(); ///console.log(words); This was to test API was working, and yes it is. Line below converts the words into array elements
  const wordArray = wordsApi.split("\n");//console.log(wordArray); Line below will pull a random word from the array
    const randomIndex = Math.floor(Math.random() * wordArray.length);
    word = wordArray[randomIndex].trim();
    circle(word);
  };

getWord();

//function to hold circle symbols in place of letters
const circle = function (word){
  const placeHolderLetters = [];
  for (const letter of word) {
    //console.log(letter);
    placeHolderLetters.push("●");
  }
  progress.innerText = placeHolderLetters.join("");
};

guessButton.addEventListener("click", function (e) {
  e.preventDefault();
  //empty message paragraph
  message.innerText = "";
  //grabbing input value
  const guess = letterInput.value;
  //verifying that it is a single letter
  const goodGuess = validator(guess);

  if (goodGuess) {
    makeGuess(guess);
  }
  letterInput.value = "";
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
if (guessedLetters.includes(guess)) {
  message.innerText= "You already guessed that one, silly! Try a new letter.";
} else {
  guessedLetters.push(guess);
  console.log(guessedLetters);
  countDown(guess);
  displayGuessedLetters;
}
updateWordProgress(guessedLetters); //links function so remaining guesses will update as the player guesses letters
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

//replaces dot symbols with letters
const updateWordProgress = function (guessedLetters) {
  const wordUpper = word.toUpperCase();
  const wordArray = wordUpper.split("");
  const reveal = [];
  for (const letter of wordArray) {
    if (guessedLetters.includes(letter)) {
      reveal.push(letter.toUpperCase());
    } else {
      reveal.push("●");
    }
  }
  progress.innerText = reveal.join("");

  winCheck();
};

//counts remaining guesses
const countDown = function (guess) {
  const upperWord = word.toUpperCase();//this makes the word pulled from the API in uppercase because the user's guess is translated to uppercase. This allows for a direct comparison
  //This will check if the guessedLetter(aka- letters guessed by user) includes a same letter as the guess (letters from the word generated by the API)
    if (!upperWord.includes(guess)){
      message.innerText = `Sorry, the word has no ${guess}.`;
      remainingGuesses -= 1;
    } else {
      message.innerText = `Great job! The word has the letter ${guess}!`;
    }
  
   //displays the number of remaining guesses on page
    if (remainingGuesses === 0) {
      message.innerHTML = `Game over! The word was <span class ="highlight">${word}</span>.`;
      startOver();
    } else if (remainingGuesses === 1) {
      span.innerText = `${remainingGuesses} guess`;
    } else if (remainingGuesses > 1){
      span.innerText= `${remainingGuesses} guesses`;
  };
};

//checks if this is a win
const winCheck = function () {
  if (word.toUpperCase() === progress.innerText) {
    message.classList.add("win");
    message.innerHTML = `<p class= "highlight"> You guessed the correct word! Congrats! </p>`;
  } 
  startOver();
};

const startOver = function () {
  guessButton.classList.add("hide");
  remain.classList.add("hide");
  guessedUL.classList.add("hide");
  playButton.classList.remove("hide");
}

playButton.addEventListener("click", function (e) (
  message.classList.remove("win");
  message.innerText = "";
  guessedUL.innerText = "";
  remainingGuesses = 8;
  getWord();
);