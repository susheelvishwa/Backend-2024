const { log } = require("console")
const fs = require("fs")

let data = fs.readFileSync("./note.txt", "utf8")
console.log(data);
console.time("hii");

