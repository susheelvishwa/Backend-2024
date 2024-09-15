# Fundamental Concepts of Web Technology
## 1. What is a Server?
## 2. HTTP and HTTPS
## 3. Application Layer Protocol
## 4. Internet Protocol (IP)
## 5. SSL (Secure Sockets Layer)
## 6. Bandwidth

# HTTP Basics
## 1. HTTP Verbs
## 2. HTTP Methods and Error Handling
















# Setting Up a Server to Handle Client Requests

## 1. Server Basics
- A server is a system process that listens to incoming client requests and sends back responses.
- The server needs a port number to listen on (e.g., `3000`, `8000`, etc.).
- The server must continuously listen for incoming requests from clients.

## 2. Running the Server
- In traditional setups, every change in the server code requires restarting the server manually. This approach is inefficient.

## 3. Solution: Using Nodemon
- **Nodemon** is an external module that monitors changes in the server files.
- It automatically restarts the server whenever changes are detected, improving development efficiency.

### Steps to Initialize a Backend Project with Nodemon:
1. Initialize a new Node.js project:
   ```bash
   npm init -y
   ```
2. Install Nodemon:
   ```bash
   npm install nodemon --save-dev
   ```
3. Update `package.json` to use Nodemon for running the server:
   ```json
   "scripts": {
     "start": "nodemon server.js"
   }
   ```

# Handling Client Requests

## 1. Problem with Vanilla Node.js: Using Multiple `if-else` Statements
- Using only Node.js for routing can result in complex and repetitive `if-else` statements to handle different routes and HTTP methods.

## 2. Solution: Using Express
- **Express** is a minimal and flexible Node.js web application framework that provides a robust set of features for web and mobile applications.
- It helps in optimizing route handling and makes the code more organized and maintainable.

### Express Features:
- Simplifies the routing process (avoids excessive `if-else` statements).
- Provides middleware for handling requests.
- Supports HTTP methods and response handling efficiently.

# RESTful API and CRUD Operations

## 1. What is a RESTful API?
- A RESTful API uses HTTP requests to perform CRUD operations on resources.
- CRUD stands for Create, Read, Update, Delete – basic operations that can be performed on any resource.

## 2. Common HTTP Methods for CRUD:
- `GET`: Retrieve data from the server (Read).
- `POST`: Send new data to the server (Create).
- `PUT`: Update existing data on the server (Update).
- `DELETE`: Remove data from the server (Delete).

## 3. Creating a RESTful API Endpoint Example:
```javascript

app.get('/cart', (req, res) => {
    res.send('Getting cart items');
});

app.post('/cart', (req, res) => {
    res.send('Adding item to cart');
});

app.put('/cart/:id', (req, res) => {
    res.send(`Updating item with ID: ${req.params.id}`);
});

app.delete('/cart/:id', (req, res) => {
    res.send(`Deleting item with ID: ${req.params.id}`);
});
```
