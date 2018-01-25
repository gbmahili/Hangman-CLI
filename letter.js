// Require the inquirer
var inquirer = require('inquirer');
// Require the word.js file
var word = require("./word.js");
// Grab the dashedWord which was created in the word.js file
var dashedWord = word.dashedWord;
// Create a count to be used in the inquirer
var count = 0;
// Create the remainingGuesses which will track the number of guesses remaining for the plaer
var remainingGuesses = dashedWord.length + 5;

// Let's start the game by showing hte user some instructions:
console.log(`
###################################################################################
### A letter has been chosen and it is represented by the below dashes.############
### You can't see the word. Start guessing each letter that makes up that word: ###
###################################################################################`);
console.log("\n");
// Let us give a user some hint: The hint contains the length of the word to be guessed
console.log(`Word to guess: ${dashedWord}`);
console.log("\n");

// Let us create a function to show the letter:
var showLetter = function () {
    // Check if our count is less than than the length of the dashes...which is also the length of the word to guess
    if (count < dashedWord.length) {
        // As long as it is less than the count, we prompt the user to enter a letter to guess
        inquirer.prompt([
            {
                type: "input",
                name: "letterTyped",
                message: "Guess a letter...\n"
            }
        ]).then(answers => {
            // First, let's get the letter that the user just typed...this is located in the inquirer answer's object
            var letterTyped = answers.letterTyped;
            // Then, we take the word to guess and make it into an array            
            var wordToGuessArray = wordToGuess.split("");
            // Now, we are going to check if the letter typed is part of the letters in that word, if it is, we push the letter's position to this array
            var indexesOfLetterTyped = [];
            // Loop through and create that array of indexes
            wordToGuessArray.forEach((element, i) => {
                if (element === letterTyped) {
                    indexesOfLetterTyped.push(i);
                }
            });
            // This function will be used to recreate a word with dashes while replacing the typed letter at a certain position
            String.prototype.replaceAt = function (index, replacement) {
                return this.substr(0, index) + replacement + this.substr(index + replacement.length);
            }
            // We loop through the indexes of letter typed and use each index to replace the corresponding letter
            indexesOfLetterTyped.forEach(element => {
                dashedWord = dashedWord.replaceAt(element, letterTyped);
            });
            // Let's check if the letter guess is in the wordToGuess
            if (wordToGuess.indexOf(letterTyped) == -1) {
                // If not, show the word Incorrect
                console.log("INCORRECT!");
                // Then, reduce the remaining guesses
                remainingGuesses--;
                // Then show the remaining guesses
                console.log(`Remaining Guesses: ${remainingGuesses}`);
            }else{
                console.log("CORRECT!");
            }
            // remainingGuesses--;
            // console.log(`Remaining Guesses: ${remainingGuesses}`);
            console.log(dashedWord);
            // We increase our count so that we can rerun the prompt until it is no longer less than the word being worked on.
            count++;
            // We call that function so that it runs again if the count is less than the word to guess
            if (dashedWord != wordToGuess) {
                showLetter();
            }else{
                console.log(`
                ###############################################
                -A W E S O M E, Y O U  N A I L E D  I T  B R O-
                ### The word to guess is: '${wordToGuess}' ###
                ###############################################`);
            }
        });
    } else {
        if(remainingGuesses != 0) {
            if (dashedWord != wordToGuess) {
                count--;
                showLetter();
            }
        } else {
            console.log(`
            ###############################################
            Y O U R   G U E S S E S  A R E  O V E R  N O W!
            ### The word to guess was: '${wordToGuess}' ###
            ###############################################`);
        }
    }        
};
// Let's call that function
showLetter();