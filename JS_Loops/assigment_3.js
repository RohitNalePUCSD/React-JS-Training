/*
 * Questoin 1: Declare a variable let age = 25;. Write a series of if else statements that will:
 *              1. Print child to the console if age is less than equal to 12.
 *              2. Print teen to the console if age is between 13 and 18 (inclusive).
 *              3. Print adult to the console if age is above 18.
*/

let age = 25;

if (age <= 12) {
  console.log("Child");
} else if (age >= 13 && age <= 18) {
  console.log("Teen");
} else if (age > 18) {
  console.log("Adult");
}


// Question 2:  Do the same using switch case.

switch(true) {
  case (age <= 12):
    console.log("Child");
    break;
  case (age >= 13 && age <= 18):
    console.log("Teen");
    break;
  case (age > 18):
    console.log("Adult");
    break;
}

// Question 3: Declare a variable let arraySize = 25;. Using a for loop, add numbers from one onwards into an array till the arraySize is reached.

let arraySize = 25;
let array = [];

for (let i = 0; i < 25; i++) {
  array.push(i)
}

// Question 4: Accomplish the same using a while loop.

let arraySize_1 = 25;
let array_1 = [];
let count = 0;

while(count < arraySize_1) {
  array_1.push(count);
  count++;
}

// Can you use return instead of break in loops?
// return and break statment in loop

// Use Break;
let numbers = [1, 2, 3, 4, 5];
let searchValue = 3;
let flag = false;

for (let i = 0; i < numbers.length; i++) {
  if (numbers[i] === searchValue) {
    flag = true
    break;
  }
}

let message = flag ? "Value is found" : "Value not found";
console.log(message);


// Use Return 
flag = false;

for (let i = 0; i < numbers.length; i++) {
  if (numbers[i] === searchValue) {
    flag = true
    return;
  }
}

message = flag ? "Value is found" : "Value not found";
console.log(message);


// Getting an issue : Uncaught SyntaxError: Illegal return statement
/*
// Return :  The return statement is used inside functions to return a value and immediately terminate the function's execution.
// Break  :  The break  statement is used in loops (for, while, do-while) and switch statements.
*/