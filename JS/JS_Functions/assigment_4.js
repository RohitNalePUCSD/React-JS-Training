/*
  Question 1
  What happens when you add a for loop/while loop/switch case block inside a function and 
  use return instead of break? 
  Do statements after the loop run? 
  What is the return value? 
  Can we pass a return value from within a loop? 
  Can you return from inside an if block?
  What impact does that have?
*/

// Declare a for loop in the function
let findNumber = (array, target) => {
  for (let i = 0; i < array.length; i++) {
    if (array[i] === target) {
      return i;
    }
  }
  return -1;
}

let numbers = [2, 4, 6, 8, 10];
let index = findNumber(numbers, 6);
console.log(index);

/*
use a for loop inside a function and use return to exit the function prematurely,
the loop will stop executing, and the function will return the value specified.
*/


// In the console getting an error, need help

let array = [2, 4, 6, 8, 10];
let target = 4;

for (let i = 0; i < array.length; i++) {
  if (array[i] === target) {
    console.log(i);
    return i;
  }
}


// Declare a while loop

let findNumber = (array, target)=> {
  let count = 0;
  while (count < array.length) {
    if (array[count] === target) {
      return count;
    }
    count++;
  }
  return -1;
}

let array = [1,2,3,4,5,6,7];
let target = 4;
let result = findNumber(array, target);
console.log(result);

// Declare a switch case statement

let getDay = (number) => {
  switch (number) {
    case 1:
      return 'Sunday';
    case 2:
      return 'Monday';
    case 3:
      return 'Tuesday';
    default:
      return 'Invalid day number';
  }
}

let day = getDay(2);
console.log(day);


/*
Question 2

Take a function that accepts a function as a parameter (also known as callback function). 
*/

function test(callback) {
  console.log(`We are in the test function and call back name is ${callback}`);
  callback();
}

function callbackFunc() {
  console.log("Calling the callback function");
  return 5;
}

// Point 1
// Just display the "We are in the test function", "Calling the callback function" and then return.
test(callbackFunc);


// Point 2
// Display the "Calling the callback function", "We are in the test function" and getting error because
// We pass the 5 value to the callback and this function is not available or defined. 
// TypeError: callback is not a function
// value = callbackFunc(); test(value)
test(callbackFunc());

// Point 3
// execute the test before that function then arrow function is execute and call callbackFunc function. 
// display the output : Calling the callback function and return 5;
//
// We are in the test function and call back name is () => callbackFunc()
// Calling the callback function
test(() => callbackFunc());


// Point 4
// What happens when you return callback() from the test function?
// The test function executes the callback function and returns whatever value the callback function returns.

let test = (callback) => {
  return callback();
}

let callbackFunc = () => {
  console.log("Calling the callback function");
  return 5;
}

let result = test(callbackFunc);
console.log(result);



// Point 5
// What happens when you return callback from the test function?
// return callback (without the parentheses) from the test function,
//  you are returning the callback function itself, not executing it.

let test = (callback) => {
  return callback;
}

let callbackFunc = () => {
  console.log("Calling the callback function");
  return 5;
}

let result = test(callbackFunc);
console.log(result);

