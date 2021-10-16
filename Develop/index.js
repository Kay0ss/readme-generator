const inquirer = require("inquirer");
const fs = require("fs");
const generateMarkdown = require("./utils/generateMarkdown");

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
      message: "List your collaborators, with links to their Github profiles",
      name: "credits",
    },    
    {
        type: "input",
        message: "What is your license type for the project? If you need help choosing a license, refer to [https://choosealicense.com/](https://choosealicense.com/)",
        name: "license",
    },
    
  ])

  .then((response) => {
    const projectTitle = response.title;
    console.log(projectTitle);

    const projDescription = response.description;
    console.log(projDescription);

    const install = response.installation;
    console.log(install);

    const usageNotes = response.usage;
    console.log(usageNotes);

    const credit = response.credits;
    console.log(credit);

    const licenseInfo = response.license;
    console.log(licenseInfo);

    const temp = generateMarkdown(response);

    const readme = `# Username

## ${projectTitle}

# Description
## ${projDescription}

# Table of Contents
## 

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
      err ? console.log("oops") : console.log("yay");
    });
  });
