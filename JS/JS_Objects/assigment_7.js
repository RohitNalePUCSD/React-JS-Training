/*
Question 1:  
How will you create a new copy of the object below while updating the value of address.details[0] to “5“?
*/

const originalObject = {
  name: "Harry Potter",
  age: 12,
  address: {
    details: ["4", "Privet Drive"],
    area: "Little Whinging",
    city: "Surrey",
    state: "England",
  },
};

const updatedObject = {
  ...originalObject,
  address: {
    ...originalObject.address,
    details: [...originalObject.address.details.splice(0, 1, "5")]
  }
};

updatedObject.name = 'Rohit Nale';
updatedObject.age = 30;

console.log(updatedObject);
console.log(originalObject);

/*
Question 2:
  Write a function filterObj that will filter out all the keys of a flat object that have objects or arrays using Object.keys and Object.entries. Example:
*/

const obj = {
  a: "Apple",
  b: ["Basketball","Baseball"],
  c: {
    call: "cellphone"
  },
  d: "Dog"
}

const filterObj = (obj) => {
  const objKeys = Object.keys(obj);

  const flatObj = objKeys.filter((key) => {
    const value = obj[key];
    return !(typeof(obj[key]) == 'object');
  })

  const filterObject = {};
  for (const key of flatObj) {
    filterObject[key] = obj[key]; 
  }

  return filterObject;
}

console.log(filterObj(obj));
