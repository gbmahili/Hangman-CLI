var inquirer = require('inquirer');

var Word = function(dash){
    
    this.dash = dash;

    this.words = ["Baraka", "Mahili", "Georges", "School", "Uniform", "Mathematician"];

    this.makeDashes = function(){
        // Create a random number
        var randNum = Math.floor(Math.random() * this.words.length) + 0;
        var wordToGuess = this.words[randNum];
        var dasheedWordArray = [];
        for (let i = 0; i < wordToGuess.length; i++) {
            dasheedWordArray.push(this.dash);            
        }
        var dashedWord = "";
        dasheedWordArray.forEach(element => {
            dashedWord += element;
        });
        
        console.log(wordToGuess);
        console.log(dashedWord);
    };
};

// inquirer.prompt([
//     {
//         type: "input",
//         name: "letterTyped",
//         message: "Enter a letter to start"
//     }
// ]).then(answers => {
//     // Use user feedback for... whatever!!
//     console.log(answers);
// });

var bob = new Word("_");
bob.makeDashes();