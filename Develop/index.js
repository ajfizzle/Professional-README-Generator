const inquirer = require("inquirer");
const generateMarkdown = require('./utils/generateMarkdown');
const fs = require("fs");

function writeToFile(fileName, data) {
  const fileText = generateMarkdown(data);

  fs.writeFile(fileName, fileText, (err) => {
    if (err) {
      console.error("Error writing file:", err);
    } else {
      console.log("README file generated successfully!");
    }
  });
}

// function tiggers the application and generates user questions using inquirer
function promptUser() {
  return inquirer.prompt([
    // User name input
    {
      type: "input",
      message: "What is your name?",
      name: "name",
    },
    // User README title input
    {
      type: "input",
      message: "What is the title of your project?",
      name: "title",
    },
    // User README description input
    {
      type: "input",
      message: "Description of your project:",
      name: "description",
    },
    // User README installation instructions input
    {
      type: "input",
      message: "Instruction(s) on how to install your project?",
      name: "installation",
    },
    // User README usage information input
    {
      type: "input",
      message: "How would usage information of your project:",
      name: "usage",
    },
    // User README test information input
    {
      type: "input",
      message: "How would test your project:",
      name: "test",
    },
    // User README licensing options
    {
      type: "list",
      message: "Which license will you use for your project?",
      choices: [
        "Apache 2.0 License",
        "GNU 3.0 License",
        "MIT",
        "BSD 2-Clause",
        "BSD 3-Clause",
        "The Unlicense",
      ],
      name: "license",
    },
    // User github handle input
    {
      type: "input",
      message: "What is your GitHub Username?",
      name: "github",
    },
    // User email handle input
    {
      type: "input",
      message: "What is your email?",
      name: "email",
    },
       // User suggestion/comment handle input
       {
        type: "input",
        message: "Do you have any suggestion(s) to the project?",
        name: "suggestions",
      },
  ]);
}

// function to write README file
function init() {
  try {
    promptUser().then((data) => {
      writeToFile("generated-README.md", data);
    });
  } catch (error) {
    console.error("An error occurred:", error);
  }
}

// Function call to initialize app
init();
