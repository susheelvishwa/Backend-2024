
# MongoDB Aggregation: Pipeline and Stages

## 1. Two Concepts:
- **Pipeline**: A sequence of operations where the output of one function is the input for the next.
- **Stages**: Each function in the pipeline represents a stage.

## 2. Example:
- Let `x = 12`
  - **Function 1**: `func1 = sum(x) => return x + 5 => 17` (Output = `y`)
  - **Function 2**: `func2 = sub(y) => return y - 2 => 15` (Output = `z`)
  - **Function 3**: `func3 = mul(z) => return z + 2 => 30` (Output = Final Answer)
  
- **Pipeline Definition**: Chaining multiple functions where the output of the previous function is the input for the next. In this example, the pipeline returns the final answer `30` as the desired result.

## 3. Observation: 
- The number of functions used to get the output is `3`. These represent 3 stages in the aggregation.

## 4. MongoDB Aggregation:
- Used for **visualizing** and manipulating data.
- Involves **filtering**, **sorting**, and **computing** with operations like **sum**, **subtraction**, **multiplication**, and **division**.
