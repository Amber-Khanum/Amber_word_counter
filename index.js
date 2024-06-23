#!/usr/bin/env node
import inquirer from "inquirer";
let answer = await inquirer.prompt([
    {
        type: "input",
        name: "words",
        message: "Enter your paragraph",
    },
]);
let word_count = answer.words.trim().split(/\s+/).length;
console.log("Your sentance has " + word_count + " words.");
