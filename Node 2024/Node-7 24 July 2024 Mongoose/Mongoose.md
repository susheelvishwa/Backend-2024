
># Here we discuss about Mongoose
1. Basics of Mongoose, including the connection, structuring and validation.
2. Connecting the DB with an express app and performing CRUD.

---

># Web Application Architecture

## Client (Frontend)
- The user interacts with the frontend, which sends requests to the backend.
- The frontend is responsible for the user interface and user experience.

## Server (Backend)
- The backend processes the requests received from the frontend.
- It is responsible for the business logic, authentication, and communication with the database.

## Database
- The database stores the application's data.
- The backend interacts with the database to retrieve or store data.

## Mongoose
- Mongoose is an Object Data Modeling (ODM) library for MongoDB and Node.js.
- It provides a schema-based solution to model application data.
- In the diagram, Mongoose is shown as the intermediary between the server and the database.

## Request and Response Flow
- The client sends a request to the server.
- The server processes the request, possibly interacting with the database through Mongoose.
- The server sends a response back to the client.

---

># Why Mongoose?

## Use Case 1: For connecting the Database with Server (Express App)
Mongoose is used to establish a connection between a MongoDB database and a Node.js application using the Express framework. This connection allows the server to interact with the database, enabling data retrieval, insertion, update, and deletion.

## Use Case 2: Structuring the Database, providing a definite structure to the documents as well
Mongoose provides a way to define schemas for the data. A schema outlines the structure of the documents within a MongoDB collection, specifying the fields, data types, and any validation rules. This helps maintain consistency and organization within the database.

## Use Case 3: Validation of the data, before adding it to the database
Mongoose allows for data validation based on the defined schema. Before data is saved to the database, Mongoose can check if it meets the required criteria (such as type, format, presence of required fields, etc.). This ensures that only valid data is stored in the database.

## summary

In summary, Mongoose is used for connecting a database with a server, structuring the data, and validating the data before it is stored. These features make it a powerful tool for managing MongoDB data in Node.js applications.

---

# mongodb://127.0.0.1:27017

- mongodb --> http --> Protocol
- 127.0.0.1 --> ip address
- 27017 --> port number


># Storing Documents in MongoDB

## Part 1: Structure of Document (User Collection)

This part defines the structure of a document in a MongoDB collection. In this example, the collection is for users. The structure specifies the fields and their types:

```json
{
  "name": "string",
  "email": "string",
  "age": "number"
}
```

- **name**: A string representing the user's name.
- **email**: A string representing the user's email.
- **age**: A number representing the user's age.

This structure ensures consistency for all documents within the user collection.

## Part 2: Model (Mold)

The second part involves creating a model based on the structure defined in Part 1. A model in Mongoose acts like a blueprint for creating documents. It is implemented as a constructor function:

```javascript
const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
  name: String,
  email: String,
  age: Number
});

const User = mongoose.model('User', userSchema);
```

This schema definition is similar to the structure but serves as a blueprint (or mold) for creating objects in JavaScript.

## Part 3: Creating Documents

Using the model (mold) created in Part 2, you can now create as many documents (objects) as needed. For example:

```javascript
const user1 = new User({
  name: 'Susheel',
  email: 'susheel@India.com',
  age: 22
});

const user2 = new User({
  name: 'Shivam',
  email: 'shivam@Mumbai.com',
  age: 24
});

user1.save((err) => {
  if (err) return console.error(err);
  console.log('User1 saved successfully!');
});

user2.save((err) => {
  if (err) return console.error(err);
  console.log('User2 saved successfully!');
});
```

In this part, `user1` and `user2` are instances of the `User` model, each following the structure defined in Part 1. You can create multiple such instances and store them in the MongoDB collection.

## Summary

- **Part 1**: Define the structure of the document to ensure consistency within the collection.
- **Part 2**: Create a model (schema) based on the structure, which acts as a blueprint for creating documents.
- **Part 3**: Use the model to create multiple instances (documents), each adhering to the defined structure.

This process ensures that all documents in a MongoDB collection follow a consistent structure and allows for easy creation and management of documents using Mongoose.


# Express Application Setup Flow


## 1. Creating a Basic Express Application
### What Happens:
- **Installing the Resources:** 
  - Use npm to install Express and other necessary packages. This sets up the environment needed to run the application.
  - For example, you might run `npm install express` to install Express.

- **Creating Basic Routes:**
  - Define the endpoints (routes) that your application will respond to. These are URLs that users or clients can request.
  - For example, you might define a route for the homepage:
    ```javascript
    const express = require('express');
    const server = express();
    const PORT = 3000;

    server.get('/', (req, res) => {
      res.send('Hello World!');
    });

    server.listen(PORT, () => {
      console.log('Server is running on port ${PORT}');
    });
    ```

## 2. Connecting the DB
### What Happens:
- **Establishing a Connection:**
  - Choose a database (e.g., MongoDB, MySQL, PostgreSQL) and use a corresponding library or ORM to connect your Express application to the database.
  - For example, using Mongoose for MongoDB:
    ```javascript
    const mongoose = require('mongoose');

    mongoose.connect('mongodb://localhost:27017/mydatabase', { useNewUrlParser: true, useUnifiedTopology: true })
      .then(() => console.log('Database connected!'))
      .catch(err => console.error('Database connection error:', err));
    ```

- **Optimized Way:**
  - Implement best practices for database connections, such as using connection pooling, handling errors, and ensuring connections are closed gracefully.

## 3. Structuring the DB
### What Happens:
- **Working on the Schema, Model:**
  - Define schemas to describe the structure of your data, and create models based on these schemas. Models provide an interface to interact with the database.
  - For example, defining a schema and model in Mongoose:
    ```javascript
    const Schema = mongoose.Schema;

    const userSchema = new Schema({
      name: String,
      email: String,
      password: String
    });

    const User = mongoose.model('User', userSchema);
    ```

## 4. CRUD Operations
### What Happens:
- **Creating a New Document:**
  - Implement functionality to add new data to the database. For example, creating a new user:
    ```javascript
    app.post('/users', async (req, res) => {
      const user = new User({
        name: req.body.name,
        email: req.body.email,
        password: req.body.password
      });

      try {
        const savedUser = await user.save();
        res.status(201).send(savedUser);
      } catch (err) {
        res.status(400).send(err);
      }
    });
    ```

- **Reading All the Documents:**
  - Implement functionality to retrieve data from the database. For example, getting all users:
    ```javascript
    app.get('/users', async (req, res) => {
      try {
        const users = await User.find();
        res.status(200).send(users);
      } catch (err) {
        res.status(500).send(err);
      }
    });
    ```

- **Updating:**
  - Implement functionality to update existing data. For example, updating a user's email:
    ```javascript
    app.put('/users/:id', async (req, res) => {
      try {
        const updatedUser = await User.findByIdAndUpdate(req.params.id, { email: req.body.email }, { new: true });
        res.status(200).send(updatedUser);
      } catch (err) {
        res.status(400).send(err);
      }
    });
    ```

- **Deleting:**
  - Implement functionality to delete data. For example, deleting a user:
    ```javascript
    app.delete('/users/:id', async (req, res) => {
      try {
        await User.findByIdAndDelete(req.params.id);
        res.status(204).send();
      } catch (err) {
        res.status(500).send(err);
      }
    });
    ```

## Overall Flow
1. **Initialize Application:** Start by setting up an Express application, defining routes to handle client requests.
2. **Connect to Database:** Establish a connection to the database, ensuring it is done efficiently.
3. **Define Data Structure:** Create schemas and models to structure the data and provide methods to interact with it.
4. **Implement CRUD Operations:** Build out the functionality to create, read, update, and delete data in the database.

This flow ensures that you have a structured, scalable application that can handle various operations required for managing data.

