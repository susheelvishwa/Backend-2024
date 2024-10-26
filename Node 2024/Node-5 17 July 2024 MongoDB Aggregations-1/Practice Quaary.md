1. Get all the user whose age us greeter than 60?
 `db.studentData.aggregate([{$match:{age:{$gte:65}}}])`


2. All the user whose age is between 18 to 19?
`db.studentData.aggregate([{$match:{$and:[{age:{$gte:18}}, {age:{$lte:19}}]}}])`


3. Step 1: Understand the Requirements
Divide a number (1000) by another field, perhaps x.
Use the result of this division in further calculations.
Concatenate or format values, such as adding "1k" or appending something to a string.
Perform a final calculation on salary, which could be filtering or transforming based on conditions.

```javascript
db.collection.aggregate([
  {
    // Step 1: Perform a division operation, storing it in a field called `dividedValue`.
    $set: {
      dividedValue: { $divide: [1000, "$x"] }
    }
  },
  {
    // Step 2: Use $concat to create a new field, possibly by converting to a string format and adding "1k".
    $set: {
      customField: { $concat: [{ $toString: "$dividedValue" }, "1k"] }
    }
  },
  {
    // Step 3: Match or Filter (optional) - if you need to filter documents based on salary
    $match: {
      salary: { $gte: 20000 }  // example condition on salary
    }
  },
  {
    // Step 4: Project only necessary fields for output
    $project: {
      _id: 0,
      dividedValue: 1,
      customField: 1,
      salary: 1
    }
  }
]);

```
