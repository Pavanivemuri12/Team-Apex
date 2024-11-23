"use strict";
console.log("Welcome to TypeScript!");
let age = 20;
if (age < 50)
    age += 10;
console.log(age);
let sales = 9866426;
let Name = 'Pavani';
let is_work_complete = true;
console.log(sales, Name, is_work_complete);
function render(file) {
    console.log(file);
}
let numbers = [1, 2, 3];
console.log(numbers);
let numberr = [];
numberr[0] = 1;
numberr[1] = 1;
console.log(numberr);
let user = [1, 'Mosh'];
console.log(user[0]);
console.log(user[1]);
;
let mySize = 2;
console.log(mySize);
function calculateTax(income, taxYear = 2022) {
    if (taxYear < 2023)
        return income * 2;
    return income * 3;
}
console.log(calculateTax(10000));
//# sourceMappingURL=day-1.js.map