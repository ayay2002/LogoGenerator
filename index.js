const inquirer = require('inquirer')
const fs = require('fs')
const complete = require('./lib/generate')

const shapes = ['Square', 'Circle', 'Triangle']

const questions =
[
    // all my questions that promt the user in the terminal
    {
        type: 'input',
        name: 'characters',
        message: 'Enter up to 3 characters for your logo.'
    },
    {
        type: 'input',
        name: 'txtColor',
        message: 'What color would you like your text to be?'
    },
    {
        type: 'list',
        name: 'shape',
        message: 'Select your desired shape.',
        choices: shapes
    },
    {
        type: 'input',
        name: 'shapeColor',
        message: 'What color would you like your shape?'
    }
]
// function to bring everythting togeather and create the file with their logo
function init(){
    inquirer.prompt(questions)
    .then(answers => {
        fs.writeFile('logo.svg', complete(answers), (err) =>
        err ? console.log(err) : console.log('Successfully created logo.svg!')
        );
    })
}
init()