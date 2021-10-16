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
      message: "What is a short description of the project?",
      name: "description",
    },
    {
      type: "input",
      message: "what do you want in your bio?",
      name: "bio",
    },
    {
      type: "input",
      message: "what is your Linkedin URL?",
      name: "linkedin",
    },
    {
      type: "input",
      message: "what is your Github URL?",
      name: "github",
    },
  ])

  .then((response) => {
    const projectTitle = response.title;
    console.log(projectTitle);
    const projDescription = response.description;
    console.log(projDescription);
    const bio = response.bio;
    console.log(bio);
    const linkedin = response.linkedin;
    console.log(linkedin);
    const github = response.github;
    console.log(github);

    const temp = generateMarkdown(response);

    const readme = `# Username

## ${projectTitle}

# Description
## ${projDescription}

# Bio
## ${bio}

# Linkedin
## ${linkedin}

# Github
## ${github}
    
    `;

    fs.writeFile("GeneratedReadme.md", readme, (err) => {
      err ? console.log("oops") : console.log("yay");
    });
  });
