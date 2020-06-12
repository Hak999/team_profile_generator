const Manager = require("./lib/Manager");
const Engineer = require("./lib/Engineer");
const Intern = require("./lib/Intern");
const inquirer = require("inquirer");
const path = require("path");
const fs = require("fs");

 

const engineerHtml = require("./templates/engineer") 
const managerHtml = require("./templates/manager")
 
const mainHtml = require("./templates/main");
const internHtml = require("./templates/intern");

let id=1
const employeeDb=[]
function askQuestion() {

    inquirer.prompt({
        type: "list",
        message: "Please Choose Selection",
        choices: ["Add Manager", "Add Engineer", "Add Intern","exit"],
        name: "selection"
    }).then(function (answer) {
        switch (answer.selection) {
            case "Add Manager":
                addManager()
                
                break
            case "Add Engineer":
                addEngineer()
                 
                break
            case "Add Intern":
                addIntern()
                 
                break
            default:
                exit()    
                break
        }
    })



}

function exit(){

     let team = managerHtml(employeeDb) + engineerHtml(employeeDb) + internHtml(employeeDb) 

    let finalhtml =  mainHtml(team)
     fs.writeFile("./team.html",finalhtml,function(err){
         if (err){
             throw err 
         }
         console.log("finished")
     })

}


function addIntern(){
    inquirer.prompt([{
        type:"input",
        message:"What is your name?",
        name: "employeeName"
    },
{
    type: "input",
    message:"What is your Email?",
    name:"employeeEmail"
},
{
    type:"input",
    message:"What is your School?",
    name:"employeeSchool"
}]).then(function(answer){
    let intern = new Intern(answer.employeeName,id++, answer.employeeEmail,answer.employeeSchool)
   employeeDb.push(intern)
    console.log(employeeDb)
    askQuestion()
})
}

function addEngineer() {
    inquirer.prompt([{
        type: "input",
        message: "What is your name?",
        name: "employeeName"
    }, {
        type: "input",
        message: "What is your email?",
        name: "employeeEmail"
    },
    {
        type:"input",
        message:"What is your GitHub username?",
        name:"employeeGitHub"
    }]).then(function(answer){
        let engineer=new Engineer(answer.employeeName,id++,answer.employeeEmail,answer.employeeGitHub)
        employeeDb.push(engineer)
        console.log(employeeDb)

        askQuestion()
    })
}


function addManager() {
    inquirer.prompt([{
        type: "input",
        message: "what is your name?",
        name: "employeeName"
    }, {
        type: "input",
        message: "what is your email?",
        name: "employeeEmail"
    }, {
        type: "input",
        message: "What is your Office Number?",
        name:"employeeOfficeNumber"
    }

    ]).then(function(answer){
        let manager =new Manager(answer.employeeName,id++,answer.employeeEmail,answer.employeeOfficeNumber)
        employeeDb.push(manager)
        console.log(employeeDb)
        askQuestion()
    })
}

 askQuestion()