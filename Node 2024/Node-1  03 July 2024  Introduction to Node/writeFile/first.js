// console.log("hii... i want to learn node js");

const fs = require("fs");

fs.writeFile("output.text", "this is a matter in output.txt file and also new update", (err) => {
  if(err) {
    console.log("Error occurred");
  }else{
    console.log("file written successfully");
  };
});
