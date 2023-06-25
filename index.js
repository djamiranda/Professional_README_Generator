// TODO: Include packages needed for this application
const inquirer = require("inquirer");
const fs = require("fs");
const generateMarkdown = require("./utils/generateMarkdown");
const util = require("util");

// TODO: Create an array of questions for user input
const questions = [
    {
        type: "input",
        name: "Title",
        message: "Please enter the Project Title",
      },
    
      {
        type: "input",
        name: "Description",
        message: "Please enter project description",
      },
    
      {
        type: "input",
        name: "Installation",
        message: "Please enter installation steps",
      },
    
      {
        type: "input",
        name: "Usage",
        message: "Please provide instructions & examples for use",
      },
    
      {
        type: "list",
        name: "License",
        message: "Please choose license for project",
        choices: [
          {
            name: "GNU General Public License v3.0",
          },
          {
            name: "MIT License",
          },
          {
            name: "Apache License 2.0",
          },
          {
            name: "The Unilicense",
          },
        ],
      },
    
      {
        type: "input",
        name: "Contributing",
        message: "Please enter project contributors",
      },
    
      {
        type: "input",
        name: "Tests",
        message: "Please enter project tests",
      },
    
      {
        type: "input",
        name: "Email",
        message: "Please enter email address",
      },

      {
        type: "input",
        name: "github",
        message: "Please enter your GitHub username",
      }
];

function promptUser() {
    return inquirer.prompt(questions);
  }

// TODO: Create a function to write README file
function writeToFile(fileName, data) {
    fs.writeFile(fileName, data, function (err) {
        if (err) {
          console.error(err);
        }
      });
}

// TODO: Create a function to initialize app
async function init() {
    console.log("Professional README Generator");
    try {
      const answers = await promptUser();
      const readMe = generateMarkdown(answers);
      writeToFile("newREADME.md", readMe);
      console.log("new README.md created!");
    } catch (err) {
      console.log(err);
    }
  }
// Function call to initialize app
init();
