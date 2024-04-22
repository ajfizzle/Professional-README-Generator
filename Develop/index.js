const inquirer = require('inquirer');
const generateMarkdown = require('./utils/generateMarkdown.js');
const fs = require('fs');

// Array of questions for user input
const questions = [
    {
        type: "input",
        message: "What is your name?",
        name: "name",
    },
    {
        type: "input",
        message: "What is the title of your project?",
        name: "title",
    },
    {
        type: "input",
        message: "Description of your project:",
        name: "description",
    },
    {
        type: "input",
        message: "Instruction(s) on how to install your project?",
        name: "installation",
    },
    {
        type: "input",
        message: "How would usage information of your project:",
        name: "usage",
    },
    {
        type: "input",
        message: "We are open to any contribution(s) to this project:",
        name: "contributions",
    },
    {
        type: "input",
        message: "How would test your project:",
        name: "test",
    },
    {
        type: "list",
        message: "Which license will you use for your project?",
        choices: [
            "Apache License 2.0",
            "GNU General Public License v3.0",
            "MIT",
            "BSD 2-Clause",
            "BSD 3-Clause",
            "The Unlicense",
        ],
        name: "license",
    },
    {
        type: "input",
        message: "What is your GitHub Username?",
        name: "github",
    },
    {
        type: "input",
        message: "What is your email?",
        name: "email",
    },
];

// Function to prompt questions and store user inputs
const promptUser = () => {
    return inquirer.prompt(questions);
}

// Function to write README file
const writeToFile = (fileName, data) => {
    const markdown = generateMarkdown(data);
    fs.writeFile(fileName, markdown, (err) => {
        if (err) {
            console.error("Error writing file:", err);
        } else {
            console.log("README file generated successfully!");
        }
    });
}

// Function to initialize app
const init = () => {
    promptUser()
        .then(data => {
            writeToFile("generated-README.md", data);
        })
        .catch(error => {
            console.error("An error occurred:", error);
        });
}

// Function call to initialize app
init();
