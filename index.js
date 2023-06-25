// TODO: Include packages needed for this application
const inquirer = require("inquirer");
const fs = require("fs");
const generateMarkdown = require("./utils/generateMarkdown");

// TODO: Create an array of questions for user input
const questions = [
    {
        type: "input",
        name: "title",
        message: "Please enter the Project Title:",
      },    
      {
        type: "input",
        name: "description",
        message: "Please enter description:",
      },
      {
        type: "input",
        name: "installation",
        message: "Please enter installation instructions:",
      },
      {
        type: "input",
        name: "usage",
        message: "Please enter usage information:",
      },
      {
        type: "list",
        name: "license",
        message: "Please choose license for project:",
        choices: ["", "GNU General Public License v3.0", "MIT License", "Apache License 2.0"],
          },
      {
        type: "input",
        name: "contributing",
        message: "Please enter contribution guidelines:",
      },
      {
        type: "input",
        name: "tests",
        message: "Please enter test instructions:",
      },
      {
        type: "input",
        name: "email",
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
function writeToFile(filename, data) {
  fs.appendFile(`${filename}.md`, generateMarkdown(data), (err) =>
  err ? console.log(err) : console.log(`${filename}.md was successfully created.  Add screenshot to assets/images folder`)
  )};

// TODO: Create a function to initialize app
function init() {
  inquirer 
  .prompt(questions)
  .then((response) => {
      writeToFile(response.filename, response);
  })
  .catch(err => {
      console.log(err)
  });
}
// Function call to initialize app
init();
