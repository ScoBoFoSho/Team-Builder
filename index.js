const inquirer = require("inquirer");
const Manager = require("./lib/Manager.js");
const Engineer = require("./lib/Engineer.js");
const Intern = require("./lib/Intern.js");
const fs = require("fs");
const path = require("path");
const teamMembers = [];

const promptManager = () => {
  return inquirer
    .prompt([
      {
        type: "input",
        name: "name",
        message: "What is your name? (REQUIRED)",
        validate: (nameInput) => {
          if (nameInput) {
            return true;
          } else {
            console.log("Please enter your name!");
          }
        },
      },
      {
        type: "input",
        name: "id",
        message: "What is your worker ID? (REQUIRED)",
        validate: (idInput) => {
          if (idInput) {
            return true;
          } else {
            console.log("Please enter your ID!");
          }
        },
      },
      {
        type: "input",
        name: "email",
        message: "What is your work email?",
      },
      {
        type: "input",
        name: "officeNumber",
        message: "What is your office phone number?",
      },
    ])
    .then((answers) => {
      console.log(answers);
      const manager = new Manager(
        answers.name,
        answers.id,
        answers.email,
        answers.officeNumber
      );
      teamMembers.push(manager);
    });
};

promptManager();
