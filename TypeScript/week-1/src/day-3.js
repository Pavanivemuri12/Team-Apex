"use strict";
//Building a calculator
// import { question } from 'readline-sync';
Object.defineProperty(exports, "__esModule", { value: true });
// function main()
// {
//     console.log(question);
// }
// main(); //checking whether readline sync is working or not
var readline_sync_1 = require("readline-sync");
function main() {
    var firstStr = (0, readline_sync_1.question)('Enter first number:\n');
    //console.log(firstStr);
    var operator = (0, readline_sync_1.question)('Enter Operator:\n');
    var secondStr = (0, readline_sync_1.question)('Enter second number:\n');
    //     const firstNum=isNumber(firstStr);
    //     console.log(firstNum);
    //    // console.log(firstStr,operator,secondStr);
    //    const op=isOperator(operator);
    //    console.log(op)
    var validInput = isNumber(firstStr) && isOperator(operator) && isNumber(secondStr);
    // console.log(validInput);
    if (validInput) {
        var firstNum = parseInt(firstStr);
        var secondNum = parseInt(secondStr);
        var result = calculate(firstNum, operator, secondNum);
        console.log("result:", result);
    }
    else {
        console.log('\nInvalid Input\n');
        main();
    }
}
function isNumber(str) {
    var maybeNum = parseInt(str);
    var isNum = !isNaN(maybeNum);
    return isNum;
}
function isOperator(operator) {
    switch (operator) {
        case '+':
        case '-':
        case '*':
        case '/':
            return true;
        default:
            return false;
    }
}
function calculate(firstNum, operator, secondNum) {
    switch (operator) {
        case '+':
            return firstNum + secondNum;
        case '-':
            return firstNum - secondNum;
        case '*':
            return firstNum * secondNum;
        case '/':
            return firstNum / secondNum;
    }
}
main();
