var inquirer = require('inquirer');

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
        
        //console.log(wordToGuess);
        console.log(`\n${dashedWord.length}`);
    };
};

var count = 0;

var showLetter = function() {

    if(count < 5) {

        inquirer.prompt([
            {
                type: "input",
                name: "letterTyped",
                message: "Guess a letter..."
            }
        ]).then(answers => {
            var letterTyped = answers.letterTyped;
            var indexesOfLetterTyped = [];
            var wordToGuessArray = wordToGuess.split("");
            wordToGuessArray.forEach((element, i) => {
                if(element === letterTyped){
                    indexesOfLetterTyped.push(i);
                }
            });
            // console.log(indexesOfLetterTyped);
            // console.log(wordToGuessArray);
            String.prototype.replaceAt = function (index, replacement) {
                return this.substr(0, index) + replacement + this.substr(index + replacement.length);
            }
            indexesOfLetterTyped.forEach(element => {
                dashedWord = dashedWord.replaceAt(element, letterTyped);        
            });
            console.log(dashedWord);

            count++;
            showLetter();
        });
    }
};

showLetter();

var bob = new Word("-");
bob.makeDashes();