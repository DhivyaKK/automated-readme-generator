const fs = require("fs");
const path = require('path');
const inquirer = require("inquirer");
const util = require('util');
const generateMarkdown = require("./utils/generateMarkdown");

// array of questions for user
const questions = [
    {
        type : 'input',
        name: 'username',
        message : 'What is your GitHub username?',
        validate: function(answer){
            if(answer.length < 1 ){
                return console.log("Enter a valid GitHub username.");
            }
            return true;
        }
    },
    {
        type: 'input',
        name : 'email',
        message : 'What is your email address?',
    },
    {
        type: 'input',
        name: 'title',
        message : 'What is the title of your project?',
        validate : function(answer){
            if(answer.length < 1)
            {
                return console.log ("Enter a valid project title.");
            }
            return true;
        }
    },
    {
        type: 'input',
        name : 'description',
        message : 'Please enter a short description of your project',
        validate : function(answer){
            if(answer.length < 1)
            {
                return console.log("Enter a valid description of yopur project");
            }
            return true;
        }
    },
    {
        type: 'list',
        name : 'license',
        message : 'What kind of license should your project have?',
        choices : ['Academic Free License v3.0', 'Apache license 2.0', 'Creative Commons license family', 'Educational Community License v2.0', 'MIT License', 'The Unlicense'],
    },
    {
       type: 'input',
       name: 'installation',
       message: 'What command is required to run to install dependencies?', 
    },
    {
        type: 'input',
        name : 'tests',
        message : 'What command should be run to run tests?',
    },
    {
        type : 'input',
        name : 'usage',
        message : 'What does the user need to know about using your repo?',
    },
    {
        type: 'input',
        name : 'contributing',
        message : 'If applicabe, provide guidelines how other users can contribute to your project',
    }
];

// function to write README file
function writeToFile(fileName, data) {
    fs.writeFile (fileName , data, err =>{
        if(err){
            return console.log(err);
        }
        else{
        console.log("README.md file has been successfully generated");}
       
    });
     
}

// function to initialize program
function init() {

    //prompt user with inquirer questions
    inquirer.prompt(questions).then((data) =>{

    //pass inquirer user response to generateMarkDown
    const markdown = generateMarkdown(data);

    //write markdown to README file
    writeToFile('TestREADME.md', markdown);
    });
}

// function call to initialize program
init();
