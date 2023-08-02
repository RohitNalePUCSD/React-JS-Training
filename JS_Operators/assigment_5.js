
//Question 1: What is the difference between ++i and i++?
// Postfix Operator

let countValue1 = (count) => {
  return count++;
}
console.log(countValue1(4));


// PreFix the Operators
let countValue2 = (count) => {
  return ++count;
}
console.log(countValue2(4));

// Question 2: 
//What do you think would happen if you pass an index beyond the range of the string?
// Or if you pass a negative index? Try it out.

let strLength = (str, index) => {
  return str[index];
}

console.log(strLength("Hello JavaScript", 20));
console.log(strLength("Hello JavaScript", -3));

// Question 3:
// 1. Do you think JSON.stringify would work for arrays as well?
// 2. What about nested objects? 
// 3. What happens if we pass numbers, strings, undefined, null to JSON.stringify?

// 1
let myArray = [1, "hello", true, null];
let jsonString = JSON.stringify(myArray);
console.log(jsonString);

// 2
let obj = {
  name: "John",
  age: undefined,
  address: { city: "Pune" },
  hobbies: ["reading", "traveling"],
  mobile: null
};

let jsonStr = JSON.stringify(obj);
console.log(jsonStr);

// 3
console.log(JSON.stringify(7));
console.log(JSON.stringify("Rohit"));
console.log(JSON.stringify(undefined));
console.log(JSON.stringify(null));


// Question 4:
//What happens if you pass a regular/invalid JSON string to JSON.parse?
// What will happen if such an invalid function runs in the program?
// Will other parts of the code execute correctly after that?

// 1
let jsonStr = '{"name": "Rohit", "age": 25}';
let parsStr = JSON.parse(jsonStr);
console.log(parsStr);


// 2
let invalidJsonStr = '{"name": "John", "age": 30,}';
try {
  let parsStr = JSON.parse(invalidJsonStr);
  console.log(parsStr);
} catch (error) {
  console.error("Error parsing JSON:", error.message);
}
