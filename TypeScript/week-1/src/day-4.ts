// const User ={
//     name: "pavani",
//     email: "pav@gmail.com",
//     isActive: true
// }

// function createUser({name,isPaid}:{name: string , isPaid: boolean}):void{}
//  let newUser ={name: "pavani", isPaid:true, email: "pav@gmail.com"}
// createUser(newUser)

// function createCourse():{name:string , price:number}{
//     return {name:"TypeScript", price:999}
// }
// Type Alias
type User ={
    name: string;
    email:string;
    isActive:boolean
}
function createUser(user:User):User{
    return {name:"",email:"",isActive:true}
}

createUser({name:"",email:"",isActive:true})

//Primitive types
type ID = string
let userId: ID ="abc23";

// Object types
type Users ={
    name: string;
    age: number;
    isPaid: boolean;
}

const newUser:Users ={
    name:"pavani",
    age:25,
    isPaid:true
}//here we declared users type and used the model in newUser
//Union Types
type Status ="active"| "inactive"|"suspended";
let userStatus: Status ="active";//here using Status type we can determine userStatus as active or inactive or suspended

//Function types
type AddFunction =(a: number,b: number)=>number;
const add: AddFunction=(x,y)=>x+y;
console.log(add(2,4))

//Intersection types
type Person = {name: string};
type Employeee = {employeeId: number};
type EmployeeeDetails = Person & Employeee;

const employeee : EmployeeeDetails = {
    name: "pavani",
    employeeId: 562
}
console.log(employeee)


// import { question } from 'readline-sync';
// const firstStr: string = question('Enter first number:\n');
// const secondStr : string = question('Enter second number:\n');
// const firstNum: number= parseInt(firstStr)
// const secondNum: number= parseInt(secondStr)
// const addd: number=(firstNum + secondNum);
// const result= console.log(addd)

//readonly
const obj = { x:10,y:20};
obj.x=30; // allowed because properties of an object declared with const are mutable

const readonlyObj:{ readonly x: number ; readonly y: number} = {x:10,y:20}
//readonlyObj.x = 30;//leads to error


//optional
interface Userr{
    name: string;
    age?: number;
}

const user1:Userr = {name: "pavani"};
const user2:Userr = {name: "pavani", age: 20};


