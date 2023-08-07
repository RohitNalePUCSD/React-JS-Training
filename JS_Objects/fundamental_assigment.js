/*
Question 1: 
  ● Write a function mapBy to convert an array of objects into an object mapped by the specified key:

This should return
{
  "Nicki":{id:1, first_name:"Nicki", ...},
  "Raychel":{id:2, first_name:"Raychell", ...},
}
*/

const users = [
  {
    "id": 1,
    "first_name": "Nicki",
    "email": "ncrozier0@squarespace.com",
    "date_of_birth": "2009/05/09"
  }, {
    "id": 2,
    "first_name": "Raychel",
    "email": "rmcgrady1@cpanel.net",
    "date_of_birth": "1996/11/05"
  }
];

const mapBy = (keyName) => {
  const resultObj = {};

  for (const user of users) {
    const value = user[keyName];
    resultObj[value] = user;
  }

  return resultObj;
} 

console.log(mapBy("first_name"));

/*
  Question 2: 
  ● Write a function groupBy to convert an array of objects into groups based on the specified key:

  groupBy(users, "gender")
    This should return 
  {
    "Male":[
      { id:1, first_name:"Nicki", ...}, 
      { id:3, first_name:"Demetris", ...}
    ]
    "Female":[
      { id: 2, first_name:"Raychel", ...},
      { id: 4, first_name:"Amata", ...}
    ]
  }
*/

const users = [
  {
    "id": 1,
    "first_name": "Nicki",
    "email": "ncrozier0@squarespace.com",
    "date_of_birth": "2009/05/09",
    "gender":"Male",
  }, {
    "id": 2,
    "first_name": "Raychel",
    "email": "rmcgrady1@cpanel.net",
    "date_of_birth": "1996/11/05",
    "gender":"Female"
  }, {
    "id": 3,
    "first_name": "Demetris",
    "email": "dkilshall2@elpais.com",
    "date_of_birth": "2018/12/31",
    "gender":"Male"
  }, {
    "id": 4,
    "first_name": "Amata",
    "email": "abraiden3@canalblog.com",
    "date_of_birth": "2012/05/23",
    "gender":"Female"
  }
];


const groupBy = (fieldName) => {
  const returnObject = {};

  for (const user of users) {
    const key = user[fieldName];
    (key in returnObject) ? returnObject[key].push(user) : returnObject[key] = [user]
  }

  return returnObject;
}

console.log(groupBy("gender"));

/*
Question 3:

● Write a function that sorts an array of objects by the key that is passed in the second argument, and in the order passed as the 3rd argiment. 

1. sort(users, “id”, “desc”) //Should return users sorted by id in descending order
2. sort(users, “first_name “desc”) //Should return users sorted by first_name in ascending order

*/

const users = [
  {
    "id": 1,
    "first_name": "Nicki",
    "email": "ncrozier0@squarespace.com",
    "date_of_birth": "2009/05/09",
    "gender":"Male",
  }, {
    "id": 2,
    "first_name": "Raychel",
    "email": "rmcgrady1@cpanel.net",
    "date_of_birth": "1996/11/05",
    "gender":"Female"
  }, {
    "id": 3,
    "first_name": "Demetris",
    "email": "dkilshall2@elpais.com",
    "date_of_birth": "2018/12/31",
    "gender":"Male"
  }, {
    "id": 4,
    "first_name": "Amata",
    "email": "abraiden3@canalblog.com",
    "date_of_birth": "2012/05/23",
    "gender":"Female"
  }
];

const sort = (fieldName, sortOrder) => {

  return users.sort((objA, objB) => {
    let keyA, keyB;

    if (fieldName === 'date_of_birth') {
      keyA = new Date(objA[key]);
      keyB = new Date(objB[key]);
    } else {
      keyA = objA[key];
      keyB = objB[key];
    }

    if (sortOrder === "asc") {
      return keyA > keyB ? 1 : -1;
    } else if (sortOrder === "desc") {
      return  keyA < keyB ? 1 : -1;
    } else {
      throw new Error("Invalid order. Please use 'asc' or 'desc'.");
    }
  });
}

console.log(sort("id", "desc"));
console.log(sort("first_name", "desc"));
console.log(sort("date_of_birth", "desc"));


/*

Question 4:
Given 2 arrays with related objects, return a new array where objects having the same id from each of the arrays are merged.
Try to achieve it with a complexity - O(n).

[{
  "id": 1,
  "first_name": "Nicki",
  "email": "ncrozier0@squarespace.com",
}, {
  "id": 2,
  "first_name": "Raychel",
  "email": "rmcgrady1@cpanel.net",
}]
*/

const userNames = [
  {
    "id": 1,
    "first_name": "Nicki",
  }, {
    "id": 2,
    "first_name": "Raychel",
  }, {
    "id": 3,
    "first_name": "Demetris",
  }, {
    "id": 4,
    "first_name": "Amata",
  }
];

const userEmails = [
  {
    "id": 2,
    "email": "rmcgrady1@cpanel.net",
  }, {
    "id": 1,
    "email": "ncrozier0@squarespace.com",
  }, {
    "id": 4,
    "email": "abraiden3@canalblog.com",
  }, {
    "id": 3,
    "email": "dkilshall2@elpais.com",
  }
];


const mergeById = (array1, array2) => {
  const resultMap = {};
  const resultMapNew = {};

  for (const obj of array1) {
    resultMap[obj.id] = { ...obj };
  }

  for (const obj of array2) {
    if (resultMap[obj.id]) {
      resultMapNew[obj.id] = { ...resultMap[obj.id], ...obj };
    }
  }

  return Object.values(resultMapNew);;
}

console.log(mergeById(userNames, userEmails));


/*
Question 5:

● Write a function to filter an array of strings to hold only unique values

*/

const filterUniqueStrings = (array) => {
  const resultHash = {};

  for (const key of array) {
    if (!(key in resultHash)) {
      resultHash[key] = 0;
    }
  }
  return Object.keys(resultHash)
}

const stringArray = ["apple", "banana", "apple", "orange", "banana", "kiwi"];
console.log(filterUniqueStrings(stringArray));
