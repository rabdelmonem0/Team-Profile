const path = require("path");
const inquirer = require("inquirer");
const fs = require("fs");
// import models

// once team is built out with the answers, you would pass them through template
const render = require("./src/template.js");
// also need to define an output directory and an output path

const teamArr = [];     // each time a team member is made, add to this array

// wrapper function to start the program
function initApp() {

    function createManager() {

        createTeam()
    }

    function createTeam() {

        // ask what team member the user wants to add

        // switch statement
            // case Engineer 
                // addEngineer();

            // case 'Build team':
                // buildTeam()
    }

    function addEngineer() {

        createTeam()
    }

    function addIntern() {

    }

    function buildTeam() {
        // if the dist fodler doesn't exist we want to create it
            // run the team through the template
        // fs.writeFileSync(outputPath, render(teamMember), 'utf-8')
    }

    createManager();
}

initApp();