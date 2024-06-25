#!usr/bin/env node 
import inquirer from "inquirer";
const Currency = {
    USD: 1,
    EUR: 0.91,
    INR: 74.57,
    PKR: 280,
    GBP: 0.76
};
//   User input from which currency want to convert
let userAnswer = await inquirer.prompt([{
        name: "from",
        message: "Enter From Currency",
        type: "list",
        choices: ["USD", "GBP", "INR", "PKR"]
    },
    // user input in which currency want to convert
    {
        name: "to",
        message: "Enter to Currency",
        type: "list",
        choices: ["USD", "GBP", "INR", "PKR"],
    },
    {
        name: "amount",
        type: "number",
        message: "Enter Your Amount"
    }
]);
// console.log(userAnswer);
let fromAmount = Currency[userAnswer.from];
let toAmount = Currency[userAnswer.to];
let amount = userAnswer.amount;
let baseAmount = amount / fromAmount;
let convertedAmount = baseAmount * toAmount;
console.log(convertedAmount);
//  console.log(fromAmount);
//  console.log(toAmount);
//  console.log(amount);
