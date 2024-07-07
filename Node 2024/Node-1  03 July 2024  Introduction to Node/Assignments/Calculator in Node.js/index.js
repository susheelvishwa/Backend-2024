// index.js

// Import the crypto module
const crypto = require("crypto");

// Get commands using process.argv
const args = process.argv.slice(2);

// Function to perform the calculations and handle operations
function performOperation(args) {
  if (args.length === 0) {
    console.log("No operation provided.");
    return;
  }

  const operation = args[0];
  const operands = args.slice(1).map(Number);

  switch (operation) {
    case "add":
      if (operands.length < 2) {
        console.log("Addition requires at least two numbers.");
        return;
      }
      const sum = operands.reduce((acc, curr) => acc + curr, 0);
      console.log(`Result: ${sum}`);
      break;

    case "sub":
      if (operands.length < 2) {
        console.log("Subtraction requires at least two numbers.");
        return;
      }
      const difference = operands.reduce((acc, curr) => acc - curr);
      console.log(`Result: ${difference}`);
      break;

    case "mult":
      if (operands.length < 2) {
        console.log("Multiplication requires at least two numbers.");
        return;
      }
      const product = operands.reduce((acc, curr) => acc * curr, 1);
      console.log(`Result: ${product}`);
      break;

    case "divide":
      if (operands.length < 2) {
        console.log("Division requires at least two numbers.");
        return;
      }
      const quotient = operands.reduce((acc, curr) => acc / curr);
      console.log(`Result: ${quotient}`);
      break;

    case "sin":
      if (operands.length !== 1) {
        console.log("Sine requires exactly one number.");
        return;
      }
      console.log(`Result: ${Math.sin(operands[0])}`);
      break;

    case "cos":
      if (operands.length !== 1) {
        console.log("Cosine requires exactly one number.");
        return;
      }
      console.log(`Result: ${Math.cos(operands[0])}`);
      break;

    case "tan":
      if (operands.length !== 1) {
        console.log("Tangent requires exactly one number.");
        return;
      }
      console.log(`Result: ${Math.tan(operands[0])}`);
      break;

    case "random":
      if (operands.length !== 1) {
        console.log("Provide length for random number generation.");
        return;
      }
      const length = operands[0];
      if (length <= 0) {
        console.log("Length should be a positive number.");
        return;
      }
      const randomNumber = crypto.randomBytes(length).toString("hex");
      console.log(`Random Number: ${randomNumber}`);
      break;

    default:
      console.log("Invalid operation");
  }
}

// Perform the operation with the provided arguments
performOperation(args);
