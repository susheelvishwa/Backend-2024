const express = require("express");
const fs = require("fs");
const app = express();


app.use(express.json());

app.get("/", (req, res) => {
  res.send("Hello");
});

app.post("/", (req, res) => {
  console.log(req.body);
  res.send("Data has been accepted");
});

app.get("/details", (req, res) => {
  const data = JSON.parse(fs.readFileSync("./db.json", "utf-8"));
  res.json(data);
});

app.get("/student", (req, res) => {
  const data = JSON.parse(fs.readFileSync("./db.json", "utf-8"));
  console.log(data.students);
  res.json(data.students);
});

app.post("/student", (req, res) => {
  const data = JSON.parse(fs.readFileSync("./db.json", "utf-8"));
  data.students.push(req.body);
  fs.writeFileSync("./db.json", JSON.stringify(data, null, 2));
  res.send("Student data has been added");
});

app.delete("/student", (req, res) => {
  const { name } = req.body;
  const data = JSON.parse(fs.readFileSync("./db.json", "utf-8"));
  const updatedStudents = data.students.filter(
    (student) => student.name !== name
  );

  if (updatedStudents.length === data.students.length) {
    res.status(404).send("Student not found");
  } else {
    data.students = updatedStudents;
    fs.writeFileSync("./db.json", JSON.stringify(data, null, 2));
    res.send("Student data has been deleted");
  }
});

app.listen(8080, () => {
  console.log("Running on port 8080");
});
