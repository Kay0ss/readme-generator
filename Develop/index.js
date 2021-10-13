// TODO: Include packages needed for this application

// TODO: Create an array of questions for user input
const questions = [

];

// TODO: Create a function to write README file
function writeToFile(fileName, data) {}

// TODO: Create a function to initialize app
function init() {}

// Function call to initialize app
init();







const inquirer = require('inquirer')
const fs = require('fs')
const generateMarkdown = require('./Develop/utils/generateMarkdown');



inquirer.prompt([
    {
        type: 'input',
        message: 'what is your name?',
        name: 'name',
    },
    {
        type: 'input',
        message: 'what is your location?',
        name: 'location',
    },
    {
        type: 'input',
        message: 'what do you want in your bio?',
        name: 'bio',
    },
    {
        type: 'input',
        message: 'what is your Linkedin URL?',
        name: 'linkedin',
    },
    {
        type: 'input',
        message: 'what is your Github URL?',
        name: 'github',
    },
])

.then((response) => {
    const userName = response.name
    console.log(userName)
    const location = response.location
    console.log(location)
    const bio = response.bio
    console.log(bio)
    const linkedin = response.linkedin
    console.log(linkedin)
    const github = response.github
    console.log(github)

    const readMe = '
    
    
    
    
    
    
    
    
    '

//     const readMe = `<!DOCTYPE html>
// <html lang="en">
// <head>
//     <meta charset="UTF-8">
//     <meta http-equiv="X-UA-Compatible" content="IE=edge">
//     <meta name="viewport" content="width=device-width, initial-scale=1.0">
//     <title>portfolio</title>
//     <link rel='stylesheet' href='./style.css'/>
// </head>
// <body>
//     <header>
//         <h1>${userName}</h1>
//         <h2>${location}</h2>
//         <img src="./images/ET.png">
//     </header>

//     <div>
//         <h3>ABOUT ME</h3>
//         <p class='bio'>${bio}</p>
//     </div>

//     <footer>
//         <p>${linkedin}</p>
//         <p>${github}</p>
//     </footer>
// </body>
// </html>`

    



    fs.writeFile('index.html', portfolioHtml, err =>{
        err ? console.log ('oops') : console.log ('yay')
    })
})