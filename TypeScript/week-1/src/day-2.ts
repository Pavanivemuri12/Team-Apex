//Objects and //Advanced types
type Employee ={

    readonly id:number,
     name:string,
     retire:(date:Date)=> void
}
let employee: Employee={
    id:1 ,
     name:'Pavani',
     retire:(date:Date)=>{
        console.log(date);
     }
    }
//changing the id to another number is not valid.so to avoid this we use readonly
// union types- we can either use number or string but we need to specify it
function kgToLbs(weight: number| string):number{
    //narrowing
    if (typeof weight === 'number')
    return weight *2;
    else
    return parseInt(weight)*2;
}
console.log(kgToLbs(10));
console.log(kgToLbs('10'));
//intersection types
//instead of using | we can use & to combine the properties
type Draggable ={
    drag: () => void
};
type Resizable ={
    resize:() => void
};

type UIWidget = Draggable & Resizable;

let textBox: UIWidget ={
    drag:() => {},
    resize:() => {}
}

//Literal types-sometimes we limit the values that are assigned to a variable

let quantity1:50 | 100 =50; //either can set it to 50 or 100

type Quantity = 50|100; //custom type
let quantity:Quantity =100;

type Metric = 'cm'|'inch';

//Nullable types-we can't se null directly in ts to use this feature
function greet(name:string |null){
    if(name)
        console.log(name.toUpperCase());
    else
    console.log('Hola!');
}
greet(null);

//optional chaining
type Customer ={
    birthday?:Date
};

function getCustomer(id:number):Customer|null|undefined{
    return id === 0? null: {birthday:new Date()};

}
let customer=getCustomer(1);
console.log(customer);
//optional property access operator
console.log(customer?.birthday?.getFullYear());
//optional element access operator
//optinal call
// let log: any = null;
// log('a') here the program will crash becoz it is set to null
//to overcome this we use ?. optional call so that it will only call when it is not