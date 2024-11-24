"use strict";
console.log('Hello');
function addTwo(num) {
    return num + 2;
}
function getUpper(val) {
    return val.toUpperCase();
}
function signUpUser(name, email, isPaid) {
}
let loginUser = (name, email, isPaid = false) => {
};
console.log(addTwo(5));
console.log(getUpper('pavani'));
signUpUser("pavani", "pavani@gmail.com", true);
loginUser('pavani', 'pavani@gmail.com');
function getValue(myVal) {
    if (myVal > 5) {
        return true;
    }
    return "200 OK";
}
console.log(getValue(50));
console.log(getValue(3));
const getHello = (s) => {
    return "";
};
const heros = ["Harry Potter", "DumbleDore", "Severous Snape"];
const output = heros.map((hero) => {
    return `Hero is ${hero}`;
});
console.log(output);
output.forEach(hero => console.log(hero));
function consoleError(errmsg) {
    console.log(errmsg);
}
function handleError(errmsg) {
    throw new Error(errmsg);
}
//# sourceMappingURL=day--3.js.map