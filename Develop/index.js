const inquirer = require("inquirer");
const fs = require("fs");
const generateMarkdown = require("./utils/generateMarkdown");
const test = require("./utils/generateMarkdown");
const MIT = `"MIT License

Copyright (c) [year] [fullname]

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
SOFTWARE."`;

const GNU = `"GNU Licence
"`;

inquirer
  .prompt([
    {
      type: "input",
      message: "What is the title of your project?",
      name: "title",
    },
    {
      type: "input",
      message: "Provide a short description explaining the what, why, and how of your project.",
      name: "description",
    },
    {
      type: "input",
      message: "Please provide a step-by-step description of how to get the development environment running.",
      name: "installation",
    },
    {
      type: "input",
      message: "What are the instructions for use?",
      name: "usage",
    },
    {
      type: "input",
      message: "List your collaborators, with links to their Github profiles.",
      name: "credits",
    },    
    {
        type: "list",
        message: "Choose a license that works best for your project",
        name: "license",
        choices: [{name:"MIT", value:0 },{name:"GNU", value:1 },'test3','test4','test5'],
    },
    
  ])

  .then((response) => {
    const projectTitle = response.title;
    console.log("Title: " + projectTitle);

    const projDescription = response.description;
    console.log("Description: " + projDescription);

    const install = response.installation;
    console.log("Installation Notes: " + install);

    const usageNotes = response.usage;
    console.log("Usage Notes: " + usageNotes);

    const credit = response.credits;
    console.log("Credits: " + credit);
    
    var licenseInfo = "";

    if (response.license === 0){
        licenseInfo = MIT;
        console.log("License: MIT")
    } else if (response.license === 1){
        licenseInfo = GNU;
    }
    
    const temp = generateMarkdown(response);

    const readme = `# ${projectTitle}

# Description
## ${projDescription}

# Table of Contents
## [Installation] (#Installation)

# Installation
## ${install}

# Usage
## ${usageNotes}

# Credits
## ${credit}

# License
## ${licenseInfo}


    
    `;

    

    fs.writeFile("GeneratedReadme.md", readme, (err) => {
      err ? console.log("oops it didn't work") : console.log("Check the GeneratedReadme file");
    });
  });

  console.log(test);