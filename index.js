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

    const portfolioHtml = `

    # Username 
    ## $(userName)

    # Location
    ## $(location)

    # Bio
    ## $(bio)

    # Linkedin
    ## $(linkedin)

    # Github
    ## $(github)`

    



    fs.writeFile('index.html', portfolioHtml, err =>{
        err ? console.log ('oops') : console.log ('yay')
    })
})