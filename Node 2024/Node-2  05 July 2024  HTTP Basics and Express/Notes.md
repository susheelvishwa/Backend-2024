# 1. What is a server
# 2. HTTP and HTTPS
# 3. Application Layer Protocol
# 4. Internet Protocol IP
# 5. SSL
# 6. Bandwidth
# 7. Http verbs

># Agenda  : HTTP Basics & Express

># HTTP Methods and Error Handling

>## HTTP Methods

In RESTful APIs, different HTTP methods correspond to different actions:

1. **GET**: Used to **read** or retrieve data from the server.
2. **POST**: Used to **create** a new resource on the server.
3. **PUT** / **PATCH**: Used to **update** an existing resource on the server.
   - **PUT**: Generally used to update a resource entirely.
   - **PATCH**: Used to make partial updates to a resource.
4. **DELETE**: Used to **delete** a resource from the server.

Each method corresponds to a specific CRUD (Create, Read, Update, Delete) operation:

- **GET** -> Read
- **POST** -> Create
- **PUT**  : When you have to replace the whole the
   **PATCH** : Update when you want to update the particular field of add n ne field
- **DELETE** -> Delete

>## Error Handling

When dealing with errors or issues in a system, different actions can be taken depending on the type of issue:

1. **If the type is broken:**
   - **Repair the patch:** Attempt to fix the issue with a patch.
   - **Replace the type:** If repairing the patch is not sufficient, replace the entire type or component.

This approach ensures that minor issues can be fixed quickly with patches, while more significant problems can be addressed by replacing the faulty component entirely.


-----------------------------------------------------------------------------

># URL Differences Comparison

>## Domain and Accessibility

- **https://google.com**: This URL points to Google's public website, accessible globally.
- **http://localhost:3000/**: This URL points to a local server (localhost) on port 3000, accessible only on your machine.

## Purpose

- **https://google.com**: Used for accessing Google's web services publicly.
- **http://localhost:3000/**: Used for local development, testing, or debugging purposes.

## Security and Protocol

- **https://google.com**: Accessed over a secure connection (SSL/TLS).
- **http://localhost:3000/**: Accessed over an unsecure connection, not suitable for production.

## Port Number

- **https://google.com**: Uses default HTTPS port (443).
- **http://localhost:3000/**: Explicitly specifies port 3000 for local services.

In summary, [https://google.com](https://google.com) is publicly accessible and secure, while [http://localhost:3000/](http://localhost:3000/) is for local development and testing.


-----------------------------------------------------------

># Port Number Categories

>## Reserved Ports

>### Well-Known Ports (0-1023)
- Reserved for system services or commonly used protocols.
- Examples:
  - Port 80: HTTP (Hypertext Transfer Protocol)
  - Port 443: HTTPS (HTTP Secure)
  - Port 21: FTP (File Transfer Protocol)
  - Port 22: SSH (Secure Shell)
  - Port 25: SMTP (Simple Mail Transfer Protocol)
  - Port 110: POP3 (Post Office Protocol version 3)
  - Port 143: IMAP (Internet Message Access Protocol)
  - Port 53: DNS (Domain Name System)

>### Registered Ports (1024-49151)
- Assigned by IANA (Internet Assigned Numbers Authority) to specific services or processes by request.
- Examples:
  - Port 3306: MySQL Database
  - Port 5432: PostgreSQL Database
  - Port 27017: MongoDB Database
  - Port 8080: HTTP Alternate (commonly used for web servers during development)

>### Dynamic/Private Ports (49152-65535)
- Available for dynamic assignment and temporary use by client applications.

>## Open Port Numbers

Open port numbers are those not reserved and can be used based on the needs of applications or services. For example:
- Ports like 3000, 5000, 8000, etc., often used by developers for local testing and development servers.
- Applications or services running on non-standard ports might choose numbers in the dynamic/private range for communication.


--------------------------------------------------------------------------------
># Web Request Components Explained
```
This document explains various components of a web request using an example of fetching user information from an API endpoint.
```

## Example Scenario

Suppose you want to fetch user information from an API endpoint: `https://api.example.com/users?id=123`.

### Components

1. **Query**:
   - A query in the context of a web request refers to the part of the URL that contains data to be sent to the server. It's the part of the URL after the `?` character.
   - **Example**: In the URL `https://api.example.com/users?id=123`, the query is `id=123`.

2. **Parameter (Para)**:
   - Parameters are the key-value pairs in the query string. They provide additional information to the server about what data to retrieve or how to handle the request.
   - **Example**: In the query string `id=123`, `id` is the parameter name, and `123` is its value.

3. **URL (Uniform Resource Locator)**:
   - A URL is the address used to access a resource on the internet. It includes the protocol, domain name, and path to the resource.
   - **Example**: `https://api.example.com/users?id=123` is the URL.

4. **Body**:
   - The body of a request contains the data sent to the server. It is typically used in POST, PUT, or PATCH requests where data needs to be submitted or updated.
   - **Example**: If you're sending a POST request to create a new user, the body might contain JSON data like `{"name": "John", "email": "john@example.com"}`.

5. **Request Object (req object)**:
   - In web development, especially in backend frameworks like Express.js (Node.js), the request object represents the HTTP request and contains properties for the query string, parameters, body, HTTP headers, etc.
   - **Example**: In Express.js, you might access the request object in a route handler like this:
     ```javascript
     app.get('/users', (req, res) => {
       const userId = req.query.id; // accessing the query parameter 'id'
       // process the request and send a response
     });
     ```

6. **HTTP (HyperText Transfer Protocol)**:
   - HTTP is a protocol used for transmitting hypertext (HTML) between a client and server. It is the foundation of any data exchange on the Web.
   - **Example**: `http://example.com` uses the HTTP protocol.

7. **HTTPS (HyperText Transfer Protocol Secure)**:
   - HTTPS is an extension of HTTP. It uses SSL/TTLS to encrypt the data transferred between the client and server, ensuring a secure connection.
   - **Example**: `https://example.com` uses the HTTPS protocol, ensuring that the data is encrypted and secure.

8. **Domain Name**:
   - The domain name is the part of the URL that specifies the website's address.
   - **Example**: In `https://api.example.com/users?id=123`, `example.com` is the domain name.

>### Putting It All Together

When you make a request to `https://api.example.com/users?id=123`, here is what happens:

1. **URL**: The browser or client constructs the URL `https://api.example.com/users?id=123`.
2. **Domain Name**: `example.com` is resolved to an IP address by DNS (Domain Name System).
3. **Protocol**: The request uses the HTTPS protocol to ensure the connection is secure.
4. **Query**: The query string `id=123` is appended to the URL, indicating which user's information is being requested.
5. **Request Object**: On the server, the request object (`req` in Express.js) contains the query parameters, which can be accessed using `req.query.id`.
6. **Body**: If it were a POST request, the body would contain data sent to the server, but in this GET request, there's no body.
7. **HTTP/HTTPS**: The data is transmitted using the HTTPS protocol, ensuring the data is encrypted and secure.

>### Code Example

Here’s a simple Express.js server that handles this request:

```javascript
const express = require('express');
const app = express();

app.get('/users', (req, res) => {
  const userId = req.query.id; // Extracting the query parameter
  // Simulate fetching user information from a database
  const user = { id: userId, name: 'John Doe', email: 'john@example.com' };
  res.json(user); // Sending the user information as a JSON response
});

app.listen(3000, () => {
  console.log('Server is running on http://localhost:3000');
});
```

---


># Express

problem is : again and again using if else if else 

solution is : express

why we use express because of 
![express](./image8.png)

there a a fig file using like if else if else so for optimize propose we use express

>## Express is a backend web application framework for building RESTful APIs with Node.js

># Express.js Overview

```
Express.js is a minimal and flexible Node.js web application framework that simplifies the process of building server-side applications. It provides a robust set of features for handling routing, middleware, and HTTP requests and responses.
```

## Key Concepts

- **Routing**: Defines how the application responds to client requests to specific endpoints.
- **Middleware**: Functions with access to the request and response objects, used for tasks like authentication, logging, etc.
- **Request Handling**: Manages different HTTP methods (GET, POST, PUT, DELETE) and data handling.

## Getting Started

### Installation

You can install Express using npm:

```sh
npm install express
```

># Basic Setup

```javascript
const express = require('express');
const app = express();
const port = 3000;

app.get('/', (req, res) => {
  res.send('Hello World!');
});

app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});
```

># Basic Routing

```javascript
// GET request to the home page
app.get('/', (req, res) => {
  res.send('GET request to the homepage');
});

// POST request to the home page
app.post('/', (req, res) => {
  res.send('POST request to the homepage');
});

// PUT request to the /user page
app.put('/user', (req, res) => {
  res.send('PUT request to /user');
});

// DELETE request to the /user page
app.delete('/user', (req, res) => {
  res.send('DELETE request to /user');
});


// More routes for different HTTP methods

```

>#  Middleware

```javascript

app.use((req, res, next) => {
  console.log('Request URL:', req.originalUrl);
  next();
});

// Middleware for a specific route
app.use('/user/:id', (req, res, next) => {
  console.log('Request Type:', req.method);
  next();
});

app.get('/user/:id', (req, res, next) => {
  res.send(`User Info for ID: ${req.params.id}`);
});

```


># Using Middleware Libraries

```javascript
const bodyParser = require('body-parser');
const cookieParser = require('cookie-parser');

app.use(bodyParser.json());
app.use(cookieParser());

```

># Error Handling

```javascript
app.get('/error', (req, res, next) => {
  const err = new Error('Something went wrong!');
  next(err);
});

app.use((err, req, res, next) => {
  console.error(err.stack);
  res.status(500).send('Something broke!');
});

```

## Conclusion

>Express.js is a powerful framework for building web applications in Node.js. Its simplicity, flexibility, and rich ecosystem of middleware make it a popular choice among developers.


# Understanding Cookie Storage

Cookies are small pieces of data that websites store on a user's browser to remember information about them, typically used for a variety of purposes related to web browsing and user experience.

## 1. Purpose of Cookies
- **Session Management:** Cookies are often used to maintain user sessions. For example, when you log into a website, a session cookie is created to remember your login information as you navigate through different pages.
- **Personalization:** Cookies can store user preferences and settings. For instance, a website might remember your language preference or theme choice.
- **Tracking and Analytics:** Cookies are used to track user behavior across websites for analytics and advertising purposes. This is how advertisers show you targeted ads based on your browsing history.

## 2. Types of Cookies
- **Session Cookies:** Temporary cookies that are deleted when you close your browser. Used to store temporary information, like items in a shopping cart.
- **Persistent Cookies:** These cookies remain on your device for a specified period or until manually deleted. They are used to remember login details or preferences across sessions.
- **First-party Cookies:** Set by the website you're visiting directly. Commonly used for session management and personalization.
- **Third-party Cookies:** Set by domains other than the one you're visiting, often used by advertisers to track users across different sites.

## 3. How Cookies Are Stored
- Cookies are stored as key-value pairs in the user's web browser. Each cookie has a name, a value, and several attributes (such as domain, path, expiration date, etc.).
- Web browsers provide APIs to set, get, and delete cookies. For example, in JavaScript, you can use `document.cookie` to interact with cookies.

## 4. Security and Privacy Concerns
- **Cross-Site Scripting (XSS):** If a website is vulnerable to XSS, attackers can potentially access cookies and steal sensitive information.
- **Cross-Site Request Forgery (CSRF):** Cookies are automatically sent with requests to the server. Attackers might exploit this to perform unauthorized actions.
- **Privacy Concerns:** Cookies used for tracking can collect extensive information about a user's browsing habits, leading to concerns over user privacy.

## 5. Cookie Attributes for Security
- **Secure:** This attribute ensures that the cookie is only sent over secure (HTTPS) connections.
- **HttpOnly:** When this attribute is set, the cookie cannot be accessed via JavaScript, reducing the risk of XSS attacks.
- **SameSite:** This attribute controls whether cookies are sent with cross-site requests, which can help prevent CSRF attacks.
- **Expires/Max-Age:** These attributes define how long a cookie will be stored. If not set, the cookie will be a session cookie.

## 6. Managing Cookies
- Users can manage cookies through their browser settings. Options usually include deleting cookies, blocking cookies, or setting exceptions for certain websites.

Cookies play a crucial role in how modern websites function, providing convenience and improved user experience while also raising security and privacy concerns that developers and users need to consider.
