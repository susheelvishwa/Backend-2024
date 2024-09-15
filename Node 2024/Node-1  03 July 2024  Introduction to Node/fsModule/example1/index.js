const fs = require("fs")

const startMemory = process.memoryUsage().heapUsed
console.log(startMemory);

console.time("read");

let data = fs.readFileSync("./data.txt", "utf-8")
console.log(data);

console.timeEnd("read");