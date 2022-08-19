const inquirer = require("inquirer");
const Manager = require("./lib/Manager.js");
const Engineer = require("./lib/Engineer.js");
const Intern = require("./lib/Intern.js");
const fs = require("fs");
const path = require("path");
const generateHTML = require("./src/framework.js");
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
      // console.log(answers);
      const manager = new Manager(
        answers.name,
        answers.id,
        answers.email,
        answers.officeNumber
      );
      teamMembers.push(manager);
      promptMenu();
    });
};

const promptMenu = () => {
  return inquirer
    .prompt([
      {
        type: "list",
        name: "menu",
        message: "What would you like to do next, Boss?",
        choices: [
          "add an engineer",
          "add an intern",
          "finish building my team",
        ],
      },
    ])
    .then((userChoice) => {
      switch (userChoice.menu) {
        case "add an engineer":
          promptEngineer();
          break;
        case "add an intern":
          promptIntern();
          break;
        default:
          buildTeam();
      }
    });
};

const promptEngineer = () => {
  console.log(`
    ===================
    Add a New Engineer!
    ===================
    `);

  return inquirer
    .prompt([
      {
        type: "input",
        name: "name",
        message: "What is the Engineer's name? (REQUIRED)",
        validate: (engineerName) => {
          if (engineerName) {
            return true;
          } else {
            console.log("Engineers must have names!");
          }
        },
      },
      {
        type: "input",
        name: "id",
        message: "What is your Engineer's ID? (REQUIRED)",
        validate: (idInput) => {
          if (idInput) {
            return true;
          } else {
            console.log("Please enter your Engineer's ID!");
          }
        },
      },
      {
        type: "input",
        name: "email",
        message: "What is your Engineer's work email?",
      },
      {
        type: "input",
        name: "github",
        message: "What is your Engineer's Github Username? (REQUIRED)",
        validate: (github) => {
          if (github) {
            return true;
          } else {
            console.log("Please enter your Engineer's Github Username!");
          }
        },
      },
    ])
    .then((answers) => {
      console.log(answers);
      const engineer = new Engineer(
        answers.name,
        answers.id,
        answers.email,
        answers.github
      );
      teamMembers.push(engineer);
      promptMenu();
    });
};

const promptIntern = () => {
  console.log(`
    =================
    Add a New Intern
    =================
    `);

  return inquirer
    .prompt([
      {
        type: "input",
        name: "name",
        message: "What is your Intern's name? (REQUIRED)",
        validate: (engineerName) => {
          if (engineerName) {
            return true;
          } else {
            console.log("Interns must have names!");
          }
        },
      },
      {
        type: "input",
        name: "id",
        message: "What is your Intern's ID? (REQUIRED)",
        validate: (idInput) => {
          if (idInput) {
            return true;
          } else {
            console.log("Please enter your Intern's ID!");
          }
        },
      },
      {
        type: "input",
        name: "email",
        message: "What is your Engineer's work email?",
      },
      {
        type: "input",
        name: "school",
        message: "What school did/does your Intern attend/attended? (REQUIRED)",
        validate: (schoolName) => {
          if (schoolName) {
            return true;
          } else {
            console.log("Interns must have institution listed!");
          }
        },
      },
    ])
    .then((answers) => {
      console.log(answers);
      const intern = new Intern(
        answers.name,
        answers.id,
        answers.email,
        answers.school
      );
      teamMembers.push(intern);
      promptMenu();
    });
};

const buildTeam = () => {
  console.log(`
    ======================
    Team has been built!
    ======================
    `);
  console.log(teamMembers);

  const myHtmlTemplate = generateHTML(teamMembers);

  fs.writeFile("./dist/index.html", myHtmlTemplate, (err) => {
    if (err) {
      console.log(err);
    } else {
      console.log(
        "index.html file was written into the ./dist/index.html folder"
      );
    }
  });
};

promptManager();
