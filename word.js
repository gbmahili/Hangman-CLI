// #############  WORD CREATION  MODULE ###########
var Word = function(dash){
    // Create the dash
    this.dash = dash;
    // Create an array of words to be guessed
    this.words = ["Baraka", "Mathematician", "Oracle", "Coding", "Bootcamp"];
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
// Let's create a new instance and we pass in our separater
var newWordGenerator = new Word("-");
// We then call the makeDashes() method on our word generator
newWordGenerator.makeDashes();
// Now, we export the dashedWord only
module.exports = {
    dashedWord: dashedWord
}