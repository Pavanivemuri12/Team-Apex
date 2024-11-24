console.log('Hello');
function addTwo(num: number):number{
   return num+2
  // return "hello"
}

function getUpper(val:string){
    return val.toUpperCase()
}

function signUpUser(name:string, email:string, isPaid:boolean){

}

let loginUser=(name:string,email:string, isPaid:boolean=false) => {

}

console.log(addTwo(5))
console.log(getUpper('pavani'))
signUpUser("pavani","pavani@gmail.com",true)
loginUser('pavani','pavani@gmail.com')
function getValue(myVal: number): boolean | string {
    if(myVal>5){
        return true
    }
    return "200 OK"

}
console.log(getValue(50));
console.log(getValue(3));

const getHello = (s: string):string => {
    return ""
}// in this way we can define a function without any return value

 const heros = ["Harry Potter","DumbleDore","Severous Snape"]
//const heros = [1,2,3]
const output=heros.map((hero):string =>{
    return  `Hero is ${hero}`
})
console.log(output)
output.forEach(hero => console.log(hero)); //to print each hero individually on a new line
function consoleError(errmsg:string): void{
    console.log(errmsg);
}
function handleError(errmsg:string): never{
    throw new Error(errmsg);
}
//console.log(consoleError("hello"));
//console.log(handleError("hello"));