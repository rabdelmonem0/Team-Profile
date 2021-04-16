const path = require("path");
const inquirer = require("inquirer");
const fs = require("fs");
const Manager = require("./roles/Manager");
// import models


// once team is built out with the answers, you would pass them through template
const render = require("./src/template.js");
const Employee = require("./roles/Employee");
// also need to define an output directory and an output path

const teamArr = [];     // each time a team member is made, add to this array

// wrapper function to start the program
function initApp() {
    createManager();
}

function createManager() {
    console.log("Please build your team")
    inquirer.prompt([
        {
            type: 'input',
            name: 'managerName',
            message: "What is the manager's name?"
        },
        {
            type: 'input',
            name: 'managerId',
            message: "What is the manager's ID?"
        },
        {
            type: 'input',
            name: 'managerEmail',
            message: "What is the manager's email?",
            validate: email => {
                valid = /^(([^<>()\[\]\.,;:\s@\"]+(\.[^<>()\[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()\.,;\s@\"]+\.{0,1})+([^<>()\.,;:\s@\"]{2,}|[\d\.]+))$/.test(email);
                if (valid) {
                    return true;
                } else {
                    console.log(".  Please enter a valid email")
                    return false;
                } 
            }
        },
        {
            type: 'input',
            name: 'managerNumber',
            message: "What is the manager's office number?"
        },
    ])
    .then((answers) => {
        const manager = new Manager(
            answers.managerName, 
            answers.managerId, 
            answers.managerEmail, 
            answers.managerNumber
            );
        teamArr.push(manager);
        createTeam()
    })
    
}

function createTeam(choice) {
    inquirer.prompt([
        {
            type: 'list',
            name: 'teamMember',
            choices: [
                "Engineer",
                "Intern",
                "I don't want to add anymore team members"
            ]
        }
    ])
    .then(choice => {
        console.log(choice.teamMember)
    });

    if (choice === "Engieer") {
        addEngineer()
    } 
    // switch statement
        // case Engineer 
            // addEngineer();

        // case 'Build team':
            // buildTeam()
}

function addEngineer() {
    inquirer.prompt([
        {
            type: 'input',
            name: 'engieerName',
            message: "What is the engineer's name?"
        },
        {
            type: 'input',
            name: 'engineerId',
            message: "What is the engineer's ID?"
        },
        {
            type: 'input',
            name: 'engieerEmail',
            message: "What is the engieer's email?",
            validate: email => {
                valid = /^(([^<>()\[\]\.,;:\s@\"]+(\.[^<>()\[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()\.,;\s@\"]+\.{0,1})+([^<>()\.,;:\s@\"]{2,}|[\d\.]+))$/.test(email);
                if (valid) {
                    return true;
                } else {
                    console.log(".  Please enter a valid email")
                    return false;
                } 
            }
        },
    ])
    .then((answers) => {
        const engineer = new Employee(
            answers.engieerName, 
            answers.engieerId, 
            answers.enigeerEmail,
            );
        teamArr.push(engineer);
        createTeam()
    })
}

function addIntern() {

}

function buildTeam() {
    // if the dist fodler doesn't exist we want to create it
        // run the team through the template
    // fs.writeFileSync(outputPath, render(teamMember), 'utf-8')
}

initApp();