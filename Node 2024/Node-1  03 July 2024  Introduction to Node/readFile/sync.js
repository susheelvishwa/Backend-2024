const fs = require('fs')

let data = fs.readFileSync('./testing.md', 'utf-8')
console.log(data);

console.log("console");