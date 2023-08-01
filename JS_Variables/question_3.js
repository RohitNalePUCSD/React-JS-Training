// Declare array

let letArray = [1,2,3,4,5];
const constArray = [1,2,3,4,5];

alert(`Variable array: ${letArray} and constant array: ${constArray}`);

// Add value in the value

letArray[5] = 6;
constArray[5] = 6;

alert(`Variable array: ${letArray} and constant array: ${constArray}`);

// Delete Values from array

delete letArray[5];
delete constArray[5];

alert(`Variable array: ${letArray} and constant array: ${constArray}`);


// Declare object

let letObject = { name: 'Rohit', age: 30, number: '3459809234' };
const constObject = { name: 'Rohit', age: 30, number: '3423098' };

console.log(letObject);
console.log(constObject);

// Modify the hash object

letObject['age'] = 25;
constObject['age'] = 25;

console.log('Modify the Object')
console.log(letObject);
console.log(constObject);


// Delete the age variable

delete letObject['age'];
delete constObject['age'];

console.log('Deleting the Object')
console.log(letObject);
console.log(constObject);


// Differences
// Let Keyword:   The variable itself can be reassigned to a new object
// Const Keyword: The variable cannot be re-assigned to a new object (the reference is constant)
