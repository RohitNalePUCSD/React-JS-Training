
/*
1. Write a function that can stop execution of a function for the number of milliseconds sent as an argument

Example:
  const func = async () => {
  console.log(“Printing before”)
  //Call your function here eg. sleep(3000)
  console.log(“Printing after”)
}
*/

const sleep = (timeOut) => {
  return new Promise(resolve => setTimeout(resolve, timeOut));
};

const func = async () => {
  console.log("Printing before");
  await sleep(3000);
  console.log("Printing after");
};

func();

/*

2.  Using promises - write a function that fetches data from an API endpoint (GET https://reqres.in/api/users ).
Log the data into the console once it is received

*/

const userFetchData = (url) => {
  fetch(url)
    .then(resolve => {
      return resolve.json()
    })
    .then(response => {
      console.log("Given data is", response);
    })
    .catch(error => {
      console.error('Fetch error:', error);
    }
  )
}

userFetchData("https://reqres.in/api/users");

/*

3.  What will be printed to the console when the promise resolves and when it rejects?

*/

const testAsyncFunction = () => {
  return new Promise((resolve, reject) => {
    if (Math.random() > 0.5) {
      resolve('Test Resolve');
    } else {
      reject('Test Reject');
    }
  }).catch((err) =>{
    console.log('Error caught in testAsyncFunction: ', err);
  });
};


testAsyncFunction()
  .then((res) => {
    console.log('Response in then block: ', res);
  })
  .catch((err) => {
    console.log('Error in catch block: ', err)
  });


/*

5. What will be printed to the console?

*/

const testAsyncFunction = () => {
  return new Promise((resolve, reject) => {
    if (Math.random() > 0.5) {
      resolve('Test Resolve');
    } else {
      reject('Test Reject');
    }
  }).catch((err) => {
    console.log('Error caught in testAsyncFunction', err);
    throw new Error('Forced error');
  });
};

testAsyncFunction()
  .then((res) =>{
    console.log('Response in then block: ', res);
  })
  .catch((err) => {
    console.log('Error in catch block: ', err)
  });

/*

4.  What will be printed to the console?

*/

const testAsyncFunction = () => {
  return Promise.reject('Test static reject');
};

testAsyncFunction()
  .then((res) => {
    console.log('Response in then block', res);
  })
  .catch((err) => {
    console.log('Error in catch block', err);
  });


/*

6. Create a promise that makes a fetch call, but resolves with the data only 2 seconds 
after the data has been received in the fetch.

*/

const delayedFetch = (url) => {
  return new Promise((resolve, reject) => {

    fetch(url).then(response => {
      return response.json();
    })
    .then(data => {
      setTimeout(() => {
        resolve(data);
      }, 2000);
    })
    .catch(error => {
      reject(error);
    });
  });
};

delayedFetch('https://reqres.in/api/users')
  .then(userData => {
    console.log('Fetched User Data with Delay:', userData);
  })
  .catch(error => {
    console.error('Fetch error:', error);
  });

/*

7.  Complete the above tasks with async/await.

*/

const dealayFetch = async (url) => {
  try {
    const response = await fetch(url);

    const data = await response.json();
    await new Promise(resolve => setTimeout(resolve, 2000));

    return data;
  }
  catch (error) {
    throw new Error(error);
  }
};

const delayedUserFetch = async (apiUrl) => {
  try {
    const response = await dealayFetch(apiUrl)
    console.log('Fetched User Data with Delay:', response);
  }
  catch(error) {
    console.error('Fetch error:', error);
  };
};

delayedUserFetch('https://reqres.in/api/users')
