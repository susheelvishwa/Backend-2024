# Detailed Explanation:

># 1. Importing Dependencies:

```javascript
const express = require("express");
const fs = require("fs");
const bodyParser = require("body-parser");
```

- Express: A web application framework for Node.js to create server-side applications.
- fs: A module to interact with the file system, allowing reading and writing files.
- body-parser: A middleware to parse incoming request bodies before handling them in Express.

---

># 2. Creating the Server:


```javascript
const server = express();
server.use(bodyParser.json()); 
// to parse JSON bodies
```

- server: An instance of an Express application.
- server.use(bodyParser.json()): Middleware that parses JSON request bodies and makes the data available in req.body.

---

># 3. Defining the Port:

```javascript
const PORT = 8085;
```

- PORT: The port number on which the server will listen for requests.

># 4. Handling GET Requests:

```javascript
server.get("/school", (req, res) => {
  res.send("welcome to school page");
});
```
- server.get("/school", ...): Defines a route for handling GET requests to the /school endpoint.
- req: The request object.
- res: The response object.
- res.send("welcome to school page"): Sends a response with the message "welcome to school page".


># 5. Handling POST Requests:

```javascript
server.post("/submit", (req, res) => {
  let data = JSON.parse(fs.readFileSync("./db.json", "utf-8"));
  let reqdata = req.body;
  }) // read data from the request body
```

- server.post("/submit", ...): Defines a route for handling POST requests to the /submit endpoint.
- let data = JSON.parse(fs.readFileSync("./db.json", "utf-8"));: Reads the db.json file and parses its content as JSON.
- let reqdata = req.body;: Extracts the data sent in the request body and assigns it to reqdata.

># 6. Checking for Existing User:

```javascript
  let userExists = data.users.some((el) => el.name === reqdata.name && el.gender === reqdata.gender);

  if (userExists) {
    res.send("user already registered");
  } else {
    data.users.push(reqdata);
    fs.writeFileSync("./db.json", JSON.stringify(data, null, 2)); // write data to the file
    res.send("signup successfully");
  }
```


- let userExists = data.users.some(...): Checks if a user with the same name and gender already exists in the data.users array.
- if (userExists) { res.send("user already registered"); }: If the user already exists, sends a response with the message "user already registered".

- else { ... }: If the user does not exist:
  - data.users.push(reqdata);: Adds the new user data to the data.users array.

  - fs.writeFileSync("./db.json", JSON.stringify(data, null, 2));: Writes the updated data back to the db.json file.

  - res.send("signup successfully");: Sends a response with the message "signup successfully".

># 7. Starting the Server:

```javascript
server.listen(PORT, () => {
  console.log(`server is running on port ${PORT}`);
});
```

- server.listen(PORT, ...): Starts the server and listens for incoming requests on the specified port.
- console.log(server is running on port ${PORT});: Logs a message indicating that the server is running.


># Summary:

```text
- The server has two endpoints: /school (GET) and /submit (POST).
- The /submit endpoint reads user data from the request body, checks if the user already exists in db.json, and either registers the user or informs that the user is already registered.
- The server listens on port 8085 for incoming requests.
```






