1. What is a NoSQL Database, and explain the types of NoSQL database?
   Answer:
   NoSQL databases are non-relational databases designed for large-scale data storage and for real-time web applications. Types include:
   - Document databases (e.g., MongoDB)
   - Key-value stores (e.g., Redis)
   - Column-family stores (e.g., Cassandra)
   - Graph databases (e.g., Neo4j)

2. What is the difference between SQL and NoSQL databases?
   Answer:
   - SQL databases are relational, use structured query language, and have a fixed schema. Examples: MySQL, PostgreSQL.
   - NoSQL databases are non-relational, can handle unstructured data, and have a dynamic schema. Examples: MongoDB, Cassandra.

3. How to choose between MongoDB and MySQL based on your requirements?
   Answer:
   Choose MongoDB for unstructured data, high scalability, and flexible schema. Choose MySQL for structured data, ACID compliance, and complex queries.

4. What are collections and documents in a MongoDB database?
   Answer:
   Collections are groups of documents in MongoDB, similar to tables in SQL. Documents are individual records in a collection, similar to rows in SQL.

5. What is BSON? What is the difference between BSON and JSON?
   Answer:
   BSON (Binary JSON) is a binary representation of JSON-like documents. BSON supports more data types and is designed to be efficient in size and speed, whereas JSON is a text format.

6. What are MongoDB Compass and MongoDB Shell used for?
   Answer:
   MongoDB Compass is a GUI for interacting with MongoDB, providing data visualization and management. MongoDB Shell is a command-line interface for interacting with MongoDB databases.

7. How to create collections in MongoDB?
   Answer:
   Collections are created implicitly when a document is inserted. Alternatively, use:
   ```javascript
   db.createCollection("collection_name")
   ```

8. What is the difference between insertMany and insertOne?
Answer:
insertOne inserts a single document into a collection.
insertMany inserts multiple documents into a collection at once.

9. What is the difference between deleteOne and deleteMany?
Answer:
deleteOne deletes the first document that matches the criteria.
deleteMany deletes all documents that match the criteria.

10. How to read data in MongoDB? What is the difference between find and findOne?
Answer:

11. Use find to retrieve multiple documents:
db.collection.find()

Use findOne to retrieve a single document:
db.collection.findOne()


12. What is $set in MongoDB?
Answer:
$set is an update operator used to modify specific fields of a document:db.collection.updateOne({ _id: id }, { $set: { field: value } })


