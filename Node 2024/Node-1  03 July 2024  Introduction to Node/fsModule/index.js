// 1. Reading a File:

// const fs = require("fs");
// fs.readFile("example.txt", "utf8", (err, data) => {
//   if (err) throw err;
//   console.log(data);
// });


// 2. Writing to a File:

// const fs = require("fs");
// fs.writeFile("example.txt", "kya tum save ho...... ?", (err) => {
//   if (err) throw err;
//   console.log("File has been saved!");
// });


// 3. Appending to a File:

// const fs = require("fs");
// fs.appendFile("example.txt", " ok meko lagta he tum shayad save ho ok me chalta hu ", (err) => {
//   if (err) throw err;
//   console.log("File has been updated!");
// });


// 4. Deleting a File:

// const fs = require("fs");
// fs.unlink("example.txt", (err) => {
//   if (err) throw err;
//   console.log("File deleted!");
// });

// 5. Renaming a File:

const fs = require("fs");
fs.rename("example.txt", "newname.txt", (err) => {
  if (err) throw err;
  console.log("File renamed!");
});

