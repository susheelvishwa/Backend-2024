const lodash = require("lodash");

const users = [
  { name: "Alice", age: 25 },
  { name: "Bob", age: 30 },
  { name: "Charlie", age: 35 },
];
const result = _.find(users, { age: 30 });
console.log(result); // { name: 'Bob', age: 30 }
