// TODO: Include packages needed for this application
const inquirer = require('inquirer');
const fs = require('fs');
// TODO: Create an array of questions for user input
const questions = [];

inquirer
    .prompt([
        {
            type: 'input',
            message: 'What is your name?',
            name: 'Name',
        },
        {
            name: 'label',
            type: 'list',
            message: "What is your age?",
            choices: [23, 34, 66, 80]
        },
        {
            type: 'input',
            message: 'What languages do you know?',
            name: 'lang',
        },
        {
            type: 'input',
            message: 'What is your preferred method of communication?:',
            name: 'communicate',
        },
    ])
    .then((response) => {
        console.log(response)

        fs.writeFile('READGEN.md',

        `Name:${response.Name}\n Age: ${response.label}\nLanguage: ${response.lang}\nMethod: ${response.communicate}\n`,

            (err) =>
                err ? console.error(err) : console.log('Commit logged!'))
    });

// TODO: Create a function to write README file
function writeToFile(fileName, data) { }

// TODO: Create a function to initialize app
// function init() {}

// Function call to initialize app
// init();

// How to grab response[1], if choices == 'other', + .prompt question. promptquestion = input. "What is your prefered method of communication?" give options, let other be one. input = template ` `
// argv? To grab inputs from the user?


