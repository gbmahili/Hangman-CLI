// Get the module from the letter
var letterModule = require("./letter.js");
// Create a letter generator from the module's elemeent we exported
var letterGenerator = letterModule.letterGenerator;
// Call the showLetter function
letterGenerator.showLetter();