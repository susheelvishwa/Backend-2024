
# MongoDB Aggregation Project Notes

## Overview
This document outlines various aggregation queries using the `$project` stage in MongoDB. The `$project` stage is used to reshape documents in the aggregation pipeline, allowing for the inclusion, exclusion, and transformation of fields.

## 1. Project Specific Fields
This query will project only the `first_name`, `last_name`, and `salary` fields from the documents.

```javascript
db.studentData.aggregate([
    {
        $project: {
            _id: 0,  // Exclude the default _id field
            firstName: "$first_name",  // Rename first_name to firstName
            lastName: "$last_name",     // Rename last_name to lastName
            salary: 1                   // Include salary
        }
    }
]);
```

## 2. Calculate Full Name and Age in Months
This query creates a new field for the full name and calculates the age in months.

```javascript
db.studentData.aggregate([
    {
        $project: {
            _id: 0,
            fullName: { $concat: ["$first_name", " ", "$last_name"] },
            ageInMonths: { $multiply: ["$age", 12] }  // Convert age from years to months
        }
    }
]);
```

## 3. Conditional Projection Based on Salary
This query includes a new field `salaryCategory` based on the value of the `salary`.

```javascript
db.studentData.aggregate([
    {
        $project: {
            _id: 0,
            fullName: { $concat: ["$first_name", " ", "$last_name"] },
            salary: 1,
            salaryCategory: {
                $cond: {
                    if: { $gt: ["$salary", 50000] },
                    then: "High",
                    else: {
                        $cond: {
                            if: { $gt: ["$salary", 30000] },
                            then: "Medium",
                            else: "Low"
                        }
                    }
                }
            }
        }
    }
]);
```

## 4. Projecting with Nested Fields
If your dataset has nested fields, you can project them as well. For instance, if there is a `contact` object within each document, you could access its fields like this:

```javascript
db.studentData.aggregate([
    {
        $project: {
            _id: 0,
            fullName: { $concat: ["$first_name", " ", "$last_name"] },
            email: "$contact.email",  // Access nested field
            phone: "$contact.phone"    // Access another nested field
        }
    }
]);
```

## How to Run the Queries
1. Open your MongoDB shell or MongoDB Compass.
2. Select the appropriate database and collection where your data is stored.
3. Paste and execute the desired aggregation query.

## Summary
The `$project` stage is a powerful tool for shaping your output data in MongoDB. You can use it to rename fields, create new fields, and perform calculations or conditional logic on your data. 
