const sum = require("./sum");
const multiply = require("./multiplication");
const subtract = require("./subtraction");
const divide = require("./division");

let sumA = 3;
let sumB = 5;
console.log("Sum:", sum(sumA, sumB));

let mulA = 4;
let mulB = 6;
console.log("Multiply:", multiply(mulA, mulB));

let subA = 10;
let subB = 4;
console.log("Subtract:", subtract(subA, subB));

let divA = 12;
let divB = 4;
console.log("Divide:", divide(divA, divB));
