/*
Question 3 

Create a form to submit a blog to a mock API (reqres.in)
*/


function saveBlog(params) {
  const url = "https://reqres.in/api/blogs";
  const options = {
    method: "POST",
    mode: "no-cors",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(params),
  };
    
  fetch(url, options)
    .then((response) => response.json())
    .then((data) => {
      console.log("Your blog post successfully!", data)
    })
    .catch((error) => {
      console.log("Failed to post blog" + error);
    });
};

const getValues = () => {
  const title = document.getElementById("title");
  const details = document.getElementById("details");
  const auther = document.getElementById("auther");
  saveBlog({ title, details, auther });
}

const formSelector = document.querySelector("#blog-form");
const submitHandle = formSelector.addEventListener("submit", getValues);
