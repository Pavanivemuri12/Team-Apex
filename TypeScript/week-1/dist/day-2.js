"use strict";
var _a;
let employee = {
    id: 1,
    name: 'Pavani',
    retire: (date) => {
        console.log(date);
    }
};
function kgToLbs(weight) {
    if (typeof weight === 'number')
        return weight * 2;
    else
        return parseInt(weight) * 2;
}
console.log(kgToLbs(10));
console.log(kgToLbs('10'));
let textBox = {
    drag: () => { },
    resize: () => { }
};
let quantity1 = 50;
let quantity = 100;
function greet(name) {
    if (name)
        console.log(name.toUpperCase());
    else
        console.log('Hola!');
}
greet(null);
function getCustomer(id) {
    return id === 0 ? null : { birthday: new Date() };
}
let customer = getCustomer(1);
console.log(customer);
console.log((_a = customer === null || customer === void 0 ? void 0 : customer.birthday) === null || _a === void 0 ? void 0 : _a.getFullYear());
//# sourceMappingURL=day-2.js.map