import inquirer from "inquirer";
import chalk from 'chalk';
let myBalance = 100000;
let myPin = 1234;
let pinAnswer = await inquirer.prompt([
    { name: "pin",
        type: "number",
        message: "Enter your pin",
    }
]);
if (pinAnswer.pin === myPin) {
    console.log(chalk.blue("Login Successful"));
    let operationAnswer = await inquirer.prompt([
        { name: "operation",
            type: "list",
            message: "Select your operation",
            choices: ["Withdraw", "Deposit", "Check Balance", "Fast Cash", "Exit"]
        }
    ]);
    if (operationAnswer.operation === "Withdraw") {
        let amountAnswer = await inquirer.prompt([
            { name: "amount",
                type: "number",
                message: "Enter your amount please"
            }
        ]);
        console.log(chalk.green("Withdraw Successful"));
        console.log(chalk.yellow(`Your new balance is ${myBalance - amountAnswer.amount}`));
    }
    else if (operationAnswer.operation === "Deposit") {
        let givenAmount = await inquirer.prompt([
            { name: "amount",
                type: "number",
                message: "Enter the amount need to be deposited"
            }
        ]);
        console.log(chalk.green("Deposit Successful"));
        console.log(chalk.yellow(`Your new balance is ${myBalance + givenAmount.amount}`));
    }
    else if (operationAnswer.operation === "Fast Cash") {
        let fastAmount = await inquirer.prompt([
            { name: "amount",
                type: "list",
                message: "Select your amount",
                choices: ["1000", "2000", "5000", "10000"]
            }
        ]);
        console.log(chalk.green("Fast Cash Successful"));
        console.log(chalk.yellow(`Your new balance is ${myBalance - fastAmount.amount}`));
    }
    else if (operationAnswer.operation === "Check Balance") {
        console.log(chalk.yellow(`Your current balance is ${myBalance}`));
    }
    else if (operationAnswer.operation === "Exit") {
        console.log(chalk.bold.yellow("Thank You For Using Our ATM!!!"));
    }
}
else {
    console.log(chalk.red("Invalid pin \n Please Try Again \n Thank you. "));
}
