var inquirer = require('inquirer');

inquirer.prompt([
    {
        type: "input",
        name: "letterTyped",
        message: "Enter a letter to start"
    }
]).then(answers => {
    // Use user feedback for... whatever!!
    console.log(answers);
});