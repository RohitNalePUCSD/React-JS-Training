/*
  Question 1: Take the above array of objects. Accomplish the following tasks:
*/

const myArray = [{
    "id": 1,
    "first_name": "Nicki",
    "email": "ncrozier0@squarespace.com",
    "date_of_birth": "2009/05/09"
  }, {
    "id": 2,
    "first_name": "Raychel",
    "email": "rmcgrady1@cpanel.net",
    "date_of_birth": "1996/11/05"
  }, {
    "id": 3,
    "first_name": "Demetris",
    "email": "dkilshall2@elpais.com",
    "date_of_birth": "2018/12/31"
  }, {
    "id": 4,
    "first_name": "Amata",
    "email": "abraiden3@canalblog.com",
    "date_of_birth": "2012/05/23"
  }, {
    "id": 5,
    "first_name": "Venita",
    "email": "vheap4@clickbank.net",
    "date_of_birth": "2020/10/04"
  }, {
    "id": 6,
    "first_name": "Fairfax",
    "email": "fcrichton5@merriam-webster.com",
    "date_of_birth": "2009/12/23"
  }, {
    "id": 7,
    "first_name": "Kathleen",
    "email": "kvasyukhnov6@devhub.com",
    "date_of_birth": "2010/12/20"
  }, {
    "id": 8,
    "first_name": "Sam",
    "email": "scorck7@sitemeter.com",
    "date_of_birth": "2020/08/30"
  }, {
    "id": 9,
    "first_name": "Virgilio",
    "email": "vferandez8@e-recht24.de",
    "date_of_birth": "2000/09/07"
  }, {
    "id": 10,
    "first_name": "Townie",
    "email": "tpetyt9@upenn.edu",
    "date_of_birth": "2018/09/01"
  }
]

// 1. Write a function filterByName that accepts a string as a parameter and returns an array with only those objects where the first_name field includes that string.
const filterByName = (first_name) => myArray.filter((obj) => obj.first_name.includes(first_name));

console.log(filterByName('ROhit'));


// 2. Use Array.map to return an array of all the email fields.
const getMailList = () => myArray.map((obj) => obj.email);

console.log(getMailList())


// 3. Use Array.sort to return the array sorted in descending order by date_of_birth.
const getDateOfBirthList = () => {
  myArray.sort((objA, objB) => {
    const dateA = new Date(objA.date_of_birth);
    const dateB = new Date(objB.date_of_birth);
    return (dateB - dateA);
  });
}

getDateOfBirthList();
console.log(myArray);


// 4. Write a function getById that accepts a number as a parameter and returns the object where the id is equal to that number.
const getById = (number) => myArray.find((obj) => obj.id === number);

console.log(getById(2));


/*
Question 2:
 1. What makes a method mutating or non mutating in Javascript?
 2. Find out whether each of the following methods are mutating or non-mutating. How can you verify this?:
*/

// 1. Push
const myArray_1 = [1, 2, 3, 4, 5, 6];
const resultArray_1 = myArray_1.push(7);

console.log('(Push) Original Array:', myArray_1);
console.log('New Array:', resultArray_1);


// 2. Pop
const myArray_2 = [1, 2, 3, 4, 5, 6];
const resultArray_2 = myArray_2.pop();

console.log('(Pop) Original Array:', myArray_2);
console.log('New Array:', resultArray_2);


// 3. Sort
const myArray_3 = [3,6,2,5,6,7,2,7,8,5,8,9];
const resultArray_3 = myArray_3.sort();

console.log('(Sort) Original Array:', myArray_3);
console.log('New Array:', resultArray_3);


//4. Filter
const myArray_4 = [1, 2, 3, 4, 5, 6];
const resultArray_4 = myArray_4.filter((num) => num % 2 == 0);

console.log('(Filter) Original Array:', myArray_4);
console.log('New Array:', resultArray_4);

//5. Find
const myArray_5 = [1, 2, 3, 4, 5, 6];
const resultArray_5 = myArray_5.find((num) => num == 2);

console.log('(Find) Original Array:', myArray_5);
console.log('New Array:', resultArray_5);

//6. Map
const myArray_6 = [1, 2, 3, 4, 5, 6];
const resultArray_6 = myArray_6.map((num) => num * num);

console.log('(Map) Original Array:', myArray_6);
console.log('New Array:', resultArray_6);

