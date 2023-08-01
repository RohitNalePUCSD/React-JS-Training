// Declare a array
var numberArray = [1,2,3,4,5,6];
console.log(`1: ${typeof numberArray}`);


// Declare a null object
var nullObject = null;
console.log(`2: ${typeof nullObject}`);


// Declare Not a Number
var notNumber = NaN;
console.log(`3: ${typeof notNumber}`);

// Check numberArray varaible is the type Array 
value = Array.isArray(numberArray);
message = `Give number_array is type array ${value}`
console.log(message)

// Check notNumber varable is the type NaN
value = isNaN(notNumber);
message = `Give not_number is type NaN ${value}`
console.log(message)
