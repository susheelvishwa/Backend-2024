const fs = require("fs");

const operation = process.argv[2];
const file = process.argv[3];
const content = process.argv[4];

switch (operation) {
  case "read":
    readFile(file);
    break;
  case "delete":
    deleteFile(file);
    break;
  case "create":
    createFile(file);
    break;
  case "append":
    appendToFile(file, content);
    break;
  case "rename":
    renameFile(file, content);
    break;
  case "list":
    listFiles(file);
    break;
  default:
    console.log(`Invalid operation '${operation}'`);
}

function readFile(filePath) {
  fs.readFile(filePath, "utf8", (err, data) => {
    if (err) {
      console.error(`Error reading file '${filePath}':`, err.message);
      return;
    }
    console.log(`Contents of '${filePath}':\n${data}`);
  });
}

function deleteFile(filePath) {
  fs.unlink(filePath, (err) => {
    if (err) {
      console.error(`Error deleting file '${filePath}':`, err.message);
      return;
    }
    console.log(`File '${filePath}' deleted`);
  });
}

function createFile(filePath) {
  fs.writeFile(filePath, "", (err) => {
    if (err) {
      console.error(`Error creating file '${filePath}':`, err.message);
      return;
    }
    console.log(`File '${filePath}' created`);
  });
}

function appendToFile(filePath, newContent) {
  fs.appendFile(filePath, newContent + "\n", (err) => {
    if (err) {
      console.error(`Error appending to file '${filePath}':`, err.message);
      return;
    }
    console.log(`Content appended to the file '${filePath}'`);
  });
}

function renameFile(oldPath, newPath) {
  fs.rename(oldPath, newPath, (err) => {
    if (err) {
      console.error(
        `Error renaming file '${oldPath}' to '${newPath}':`,
        err.message
      );
      return;
    }
    console.log(`File '${oldPath}' renamed to '${newPath}'`);
  });
}

function listFiles(directoryPath) {
  fs.readdir(directoryPath, (err, files) => {
    if (err) {
      console.error(`Error listing directory '${directoryPath}':`, err.message);
      return;
    }
    console.log(
      `Contents of directory '${directoryPath}':\n${files.join("\n")}`
    );
  });
}
