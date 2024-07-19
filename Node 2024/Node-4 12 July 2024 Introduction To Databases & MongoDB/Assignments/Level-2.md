# MongoDB Shell Commands

## Retrieve all the documents
```javascript
db.collectionName.find()
```

## Retrieve the first document

```javascript
db.collectionName.findOne()
```

## Update the age of the employee to 35 where the first_name is "Sidnee"


```javascript
db.collectionName.updateOne(
  { first_name: "Sidnee" },
  { $set: { age: 35 } }
)
```

## Update the last name of "Nikolaus" to "Park"

```javascript
db.collectionName.updateOne(
  { first_name: "Nikolaus" },
  { $set: { last_name: "Park" } }
)
```
## Update the last name of "Nikolaus" to "Park"

```javascript
db.collectionName.updateOne(
  { first_name: "Nikolaus" },
  { $set: { last_name: "Park" } }
)
```





