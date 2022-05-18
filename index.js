// TODO: Include packages needed for this application
const inquirer = require('inquirer');
const fs = require('fs');
// TODO: Create an array of questions for user input
const questions = [];

inquirer
    .prompt([
        {
            type: 'input',
            message: 'What is your project called?',
            name: 'title',
        },
        {
            type: 'input',
            message: 'What is your name?',
            name: 'author',
        },
        {
            type: 'input',
            message: 'Please describe your project. You will be asked about installation, and usage later',
            name: 'describe',
        },
        {
            type: 'input',
            message: 'How might a user install your project?',
            name: 'install',
        },
        {
            type: 'input',
            message: 'How might someone use this?',
            name: 'usage',
        },
        {
            type: 'input',
            message: 'What are your guidelines for contribution?',
            name: 'contribution',
        },
        {
            type: 'input',
            message: 'How can a user test this?',
            name: 'test',
        },
        {
            type: 'list',
            message: 'What kind of license do you want?',
            name: 'license',
            choices: ['Class C', 'Class A', 'Class M', 'Drivers License']
        },
        {
            type: 'input',
            message: 'What is your github username?',
            name: 'username',
        },
        {
            type: 'input',
            message: 'What is your email?',
            name: 'email',
        },
    ])
    .then((response) => {
        console.log(response)

        fs.writeFile('READGEN.md',

            
        
        `# ${response.title}
Author: ${response.author}



## About

Description: ${response.describe}\n
Installation: ${response.install}\n
Usage: ${response.usage}\n
Contribution Guidlines: ${response.contribution}\n
Test: ${response.test}\n

## License
${response.license}\n



# Questions
[https://github.com/${response.username}]
Reach me by email at ${response.email}`,

            (err) =>
                err ? console.error(err) : console.log('Commit logged!'));

                if (response.license=='Class C'){
                    console.log("Badges, we don't need no stinkin badges")
                }
    });

// TODO: Create a function to write README file
function writeToFile(fileName, data) { }

// TODO: Create a function to initialize app
// function init() {}

// Function call to initialize app
// init();

// How to grab response[1], if choices == 'other', + .prompt question. promptquestion = input. "What is your prefered method of communication?" give options, let other be one. input = template ` `
// argv? To grab inputs from the user?


