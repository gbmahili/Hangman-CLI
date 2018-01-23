var inquirer = require('inquirer');

var wordToGuess = "m";
var Word = function(dash){
    
    this.dash = dash;

    this.words = ["Baraka", "Mahili", "Georges", "School", "Uniform", "Mathematician"];

    this.makeDashes = function(){
        // Create a random number
        var randNum = Math.floor(Math.random() * this.words.length) + 0;
        // Select a word to guess randomly from the array
        wordToGuess = this.words[randNum];
        // Instanciate the word to guess
        var dashedWordArray = [];
        // Loop through the wordToGuess length and create dashe
        for (let i = 0; i < wordToGuess.length; i++) {
            dashedWordArray.push(this.dash);            
        }
        // Instanciate the dashedWord
        dashedWord = "";
        // Create the word in dashes
        dashedWordArray.forEach(element => {
            dashedWord += `${element}`;
        });
    };
};

var count = 0;

console.log("A letter has been chosen, but you can't see it. Start guessing each letter that makes up that word:");
console.log(wordToGuess);

var showLetter = function() {
    if(count < 5) {

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
                if(element === letterTyped){
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
            // We log the dashedWord
            console.log(dashedWord);
            // We increase our count so that we can rerun the prompt until it is no longer less than the word being worked on.
            count++;
            // We call that function so that it runs again if the count is less than the word to guess
            showLetter();
        });
    }
};

// Let's call that function
showLetter();

// Let's create a new instance and we pass in our separater
var bob = new Word("-");
bob.makeDashes();