const lodash = require("lodash");

const obj1 = { a: 1, b: 2 };
const obj2 = { b: 3, c: 4 };
const result = lodash.merge(obj1, obj2);
console.log(result); // { a: 1, b: 3, c: 4 }
