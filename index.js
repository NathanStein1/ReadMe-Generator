// TODO: Include packages needed for this application
const inquirer = require('inquirer');
const fs = require('fs');
// TODO: Create an array of questions for user input
const questions = [];
let copyBig = "Tacos"
let badge = " "
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
            message: 'What year is it (use numbers)?',
            name: 'year',
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
            choices: ['MIT', 'Apache 2.0', 'GPL', 'BSD']
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
        badge = `![License](https://img.shields.io/badge/License-${response.license}-red)`
        if (response.license=='MIT'){
            copyBig = `Copyright (c) [${response.year}] ${response.author}

            Permission is hereby granted, free of charge, to any person obtaining a copy
            of this software and associated documentation files (the "Software"), to deal
            in the Software without restriction, including without limitation the rights
            to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
            copies of the Software, and to permit persons to whom the Software is
            furnished to do so, subject to the following conditions:
            
            The above copyright notice and this permission notice shall be included in all
            copies or substantial portions of the Software.
            
            THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
            IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
            FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
            AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
            LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
            OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
            SOFTWARE.`
            
        }

        fs.writeFile('READGEN.md',

            
        
        `# ${response.title}
Author: ${response.author}\n
## License
${response.license}\n

${badge}
${copyBig}


## About

Description: ${response.describe}\n
Installation: ${response.install}\n
Usage: ${response.usage}\n
Contribution Guidlines: ${response.contribution}\n
Test: ${response.test}\n





# Questions
[https://github.com/${response.username}]
Reach me by email at ${response.email}`,

            (err) =>
                err ? console.error(err) : console.log('Commit logged!'));


    });


// TODO: Create a function to initialize app
// function init() {}



// Function call to initialize app
// init();


