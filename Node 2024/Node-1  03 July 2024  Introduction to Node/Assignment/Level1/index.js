const crypto = require("crypto");
const process = require("process");

console.log(process.argv);

let operation = process.argv[2];
let a = Number(process.argv[3]);
let b = Number(process.argv[4]);

switch (operation) {
  case "sum":
    sum(a, b);
    break;
  case "sub":
    sub(a, b);
    break;
  case "mult":
    mult(a, b);
    break;
  case "divide":
    divide(a, b);
    break;
  case "sin":
    sin(a);
    break;
  case "cos":
    cos(a);
    break;
  case "tan":
    tan(a);
    break;
  case "randomInt":
    generateRandomInt(a, b);
    break;
  default:
    console.log("Invalid operation");
}

function sum(a, b) {
  console.log(a + b);
}

function sub(a, b) {
  console.log(a - b);
}

function mult(a, b) {
  console.log(a * b);
}

function divide(a, b) {
  if (b === 0) {
    console.log("Error: Division by zero");
  } else {
    console.log(a / b);
  }
}

function sin(a) {
  console.log(Math.sin(a));
}

function cos(a) {
  console.log(Math.cos(a));
}

function tan(a) {
  console.log(Math.tan(a));
}

function generateRandomInt(a, b) {
  crypto.randomInt(a, b, (err, n) => {
    if (err) throw err;
    console.log(`Random number: ${n}`);
  });
}
