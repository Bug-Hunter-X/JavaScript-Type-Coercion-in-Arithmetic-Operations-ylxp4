# JavaScript Type Coercion Bug

This repository demonstrates a common JavaScript bug related to type coercion in arithmetic operations.  When performing addition with variables of different types (e.g., number and string), JavaScript's loose typing can lead to unexpected results due to automatic type conversion. The bug showcases how string concatenation occurs instead of numerical addition, potentially causing incorrect calculations.

## Bug Description
The `foo` function adds two inputs. When both are numbers, it works as expected. However, when one input is a string, JavaScript performs string concatenation instead of numerical addition. This behavior is demonstrated in the `baz` function.

## Solution
The solution involves explicit type checking or conversion to ensure that both operands are numbers before performing the addition. This can be done using `parseInt()` or `Number()` to convert strings to numbers.

## How to Reproduce
1. Clone this repository.
2. Open `bug.js` and run it using a JavaScript runtime (e.g., Node.js).
3. Observe the output in the console. You'll see the unexpected result of string concatenation.
4. Open `bugSolution.js` and run it to see the corrected behavior.