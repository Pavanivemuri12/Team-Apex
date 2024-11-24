//Building a calculator
// import { question } from 'readline-sync';

// function main()
// {
//     console.log(question);
// }
// main(); //checking whether readline sync is working or not
import { question } from 'readline-sync';

type Operator= '+' | '-' | '*' |'/';

function main():void
{
    const firstStr: string = question('Enter first number:\n');
    //console.log(firstStr);
    const operator:string = question('Enter Operator:\n');
    const secondStr : string = question('Enter second number:\n');

//     const firstNum=isNumber(firstStr);
//     console.log(firstNum);
//    // console.log(firstStr,operator,secondStr);
//    const op=isOperator(operator);
//    console.log(op)
    const validInput:boolean = isNumber(firstStr) && isOperator(operator) && isNumber(secondStr);
    // console.log(validInput);
    if (validInput)
    {
        const firstNum: number = parseInt(firstStr);
        const secondNum:number = parseInt(secondStr);
        const result = calculate(firstNum,operator as Operator,secondNum);
        console.log(`result:`,result);
    }
    else
    {
        console.log('\nInvalid Input\n');
        main();
    }

}

function isNumber(str:string):boolean
{
    const maybeNum= parseInt(str);
    const isNum:boolean = !isNaN(maybeNum);
    return isNum;
}

function isOperator(operator:string):boolean
{
    switch(operator)
    {
        case '+':
        case '-':
        case '*':
        case '/':
            return true;
        default:
            return false;
    }
}

function calculate(firstNum:number, operator:Operator, secondNum: number)
{
    switch(operator)
    {
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