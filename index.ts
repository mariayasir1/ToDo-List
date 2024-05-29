#! /usr/bin/env node

import inquirer from "inquirer";
import chalk from "chalk";

let toDoList = [];
let conditions  = true;


console.log(chalk.bold.rgb(204,204,204)("\n \t Wellcome to Todo List by 'MARIA YASIR' \n "));

while(conditions){
    let addTask = await inquirer.prompt([
        {
            name: "add",
            type: "Input",
            message: "Enter Your New Task"
        }
    ]);
    toDoList.push(addTask.add);
    console.log(`${addTask.add} Task added in Todo List successfully`);

    let addMoreTask = await inquirer.prompt([
        {
            name: "addmore",
            type: "confirm",                  //boolean
            message: "Do you want to add more Task?",
            default: "false"
        }
    ]);
    conditions = addMoreTask.addmore
};
console.log(`Your Updated Todo List is:${toDoList}`);


