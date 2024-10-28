
# MongoDB Aggregations

## What is aggregation in MongoDB?
Imagine you are a chef tasked with creating a mouthwatering dish for your guests. You start by gathering a variety of ingredients, each with its own unique flavor and texture.
Similarly, MongoDB Aggregation gathers data from multiple documents in a collection, which can be thought of as the ingredients that make up your dish.

Next, you carefully chop, mix, and cook your ingredients, using your culinary skills to transform them into a cohesive and delicious meal.
In the same way, MongoDB Aggregation applies a series of operations to the data it has gathered, such as filtering, sorting, grouping, and transforming it, to produce a structured and organized output that meets your specific requirements.

Finally, you artfully plate your dish, using presentation techniques to make it look as good as it tastes. MongoDB Aggregation also returns the results in a structured and easy-to-understand format, allowing you to easily analyze and present the data to others.
Just as a chef takes pride in creating a memorable dining experience, MongoDB Aggregation helps developers and analysts create insightful and meaningful insights from their data.

### Aggregation
Aggregation refers to performing data processing operations on data stored in a MongoDB collection. It involves grouping, filtering, sorting, and transforming data to obtain meaningful insights. Aggregation in MongoDB is performed using the aggregation framework, which is a set of operators and stages.

### Pipeline
A pipeline in MongoDB is a sequence of stages that are applied to a collection of data in a specific order to perform aggregation operations. Each stage in the pipeline takes the output of the previous stage as input and produces a new output, which is then passed to the next stage. The pipeline is composed of one or more stages, which can be used to perform operations such as filtering, grouping, projecting, sorting, and aggregating data.

### Stages
A stage in MongoDB is a specific operation or step in the aggregation pipeline that performs a specific action on the data. Each stage takes a set of inputs and produces a set of outputs, which are then passed to the next stage in the pipeline.

Some common stages in the MongoDB aggregation pipeline include `$match`, `$group`, `$project`, `$sort`, `$limit`, and `$skip`. The `$lookup` stage is also commonly used for performing join-like operations between collections.

Stages can be used to perform a wide variety of data processing operations, making the MongoDB aggregation pipeline a powerful tool for data analysis and reporting.

The basic syntax for aggregation in MongoDB is as follows:
```javascript
db.collection.aggregate([ aggregation operation ])
```

---

### Basic Pipeline with `$limit` operator
The `$limit` operator in MongoDB aggregation pipeline limits the number of documents passed to the next stage of the pipeline. It takes a single numerical argument that specifies the maximum number of documents to pass along.

Example:
```javascript
db.pizzas.aggregate([
  { $limit: 3 }
])
```
**Output:**
```json
[ 
 { "_id" : 0, "name" : "Pepperoni", "size" : "small", "price" : 19, "quantity" : 10, "date" : ISODate("2021-03-13T08:14:30Z") },
 { "_id" : 1, "name" : "Pepperoni", "size" : "medium", "price" : 20, "quantity" : 20, "date" : ISODate("2021-03-13T09:13:24Z") },
 { "_id" : 2, "name" : "Pepperoni", "size" : "large", "price" : 21, "quantity" : 30, "date" : ISODate("2021-03-17T09:22:12Z") }
]
```

### `$limit` and `$sort` Operator Example
```javascript
db.pizzas.aggregate([
  { $sort: { price: 1 } },
  { $limit: 3 }
])
```
**Output:**
```json
[ 
 { "_id" : 3, "name" : "Cheese", "size" : "small", "price" : 12, "quantity" : 15, "date" : ISODate("2021-03-13T11:21:39.736Z") }, 
 { "_id" : 4, "name" : "Cheese", "size" : "medium", "price" : 13, "quantity" : 50, "date" : ISODate("2022-01-12T21:23:13.331Z") }, 
 { "_id" : 5, "name" : "Cheese", "size" : "large", "price" : 14, "quantity" : 10, "date" : ISODate("2022-01-12T05:08:13Z") }
]
```

### `$match` Operator
```javascript
db.pizzas.aggregate([
  { $sort: { price: -1 } },
  { $limit: 3 },
  { $match: { name: "Pepperoni" } }
])
```
**Output:**
```json
[ 
 { "_id" : 2, "name" : "Pepperoni", "size" : "large", "price" : 21, "quantity" : 30, "date" : ISODate("2021-03-17T09:22:12Z") }
]
```

---

