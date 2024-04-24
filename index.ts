#! /usr/bin/env node

import inquirer from "inquirer";
 let todos: any = []
 let condition = true

 while (condition) 
{
    let todoQuestions = await inquirer.prompt
    (
        [
            {
              name : "firstQuestion",
              type : "input",
           message : "What would you like to add in your todos list?" 
            },

            {
                name : "secondQuestion",
                type : "confirm",
             message : "Would you like to add more in your todos list?",
             default : "true"

            }
        ]
    );

    if (todoQuestions.firstQuestion.length>=2){
        todos.push(todoQuestions.firstQuestion)
        
    }
     console.log(todos);
     if(!todoQuestions.secondQuestion)
    {
        condition = false
    }
}
    