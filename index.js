// TODO: Include packages needed for this application
const inquirer = require("inquirer");
const fs = require("fs");
const generateMarkdown = require("./utils/generateMarkdown");

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
        choices: ["No License", "GNU General Public License v3.0", "MIT License", "Apache License 2.0"],
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
      },
      {
        type:"input",
        name: "filename",
        message: "Please enter filename",
      }
];

// TODO: Create a function to write README file
function writeToFile(fileName, data) {
  fs.appendFile(`${fileName}.md`, generateMarkdown(data), (err) =>
  err ? console.log(err) : console.log(`${fileName}.md was successfully created`)
  )};

// TODO: Create a function to initialize app
function init() {
  inquirer 
  .prompt(questions)
  .then((response) => {
      writeToFile(response.fileName, response);
  })
  .catch(err => {
      console.log(err)
  });
}
// Function call to initialize app
init();
