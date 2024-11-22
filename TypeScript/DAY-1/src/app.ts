console.log("Welcome to TypeScript!");
let age: number=20;
if (age < 50)
    age+= 10;
console.log(age);

//DataTypes
let sales = 9866_426
let Name = 'Pavani'
let is_work_complete = true;
console.log(sales,Name,is_work_complete);

//let level = 1; 
// let level ='a'; already declared as number
// function render(file)
// {
//     console.log(file)
// } cant be done . For this we need to add datatype any
 function render(file:any)
 {
     console.log(file)
 }

 //Arrays
 let numbers: number[] = [1,2,3]; //we cant add other datatypes for number and also no need to add number anotation ,it will automatically guesses it
 console.log(numbers)
 let numberr : number[]=[]
 numberr[0]=1
 numberr[1]=1
 console.log(numberr);
 //Tuple
 //fixed length array where each elements has a particular type
 let user:[number,string] = [1,'Mosh'];
 console.log(user[0])
 console.log(user[1])
 //tuples can be mainly used for key value pairs
  //enums-we need to use PascalCase 
//   enum Size  {Small =1 , Medium , Large};// intially takes values as 0,1... if we explicitly mention the values then it follows
//   let mysize: Size = Size.Medium
// console.log(mysize)
//to decrease the length of the js code or code complexity
//use const for enums
const enum Size {Small=1,Medium, Large};
let mySize: Size = Size.Medium;
console.log(mySize);

//functions
function calculateTax(income: number ,taxYear=2022): number{ //should declare its datatype at each step and wew can also provide numbers in arguments
    if (taxYear < 2023)
        return income * 2;
    return income * 3;
}
console.log(calculateTax(10000));
