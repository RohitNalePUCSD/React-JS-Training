import React from 'react'
import ReactDOM from 'react-dom/client'


const h1_tag = React.createElement("h1", {}, "Hello I'm H1")
const h2_tag = React.createElement("h2", {}, "Hello I'm H2")
const child1 = React.createElement("div", {id: "child1"}, [h1_tag, h2_tag])
const child2 = React.createElement("div", {id: "child2"}, [h1_tag, h2_tag])
const father1 = React.createElement("div", {id: "father1"},  [child1, child2])
const father2 = React.createElement("div", {id: "father2"},  [child1, child2])
const parent1 = React.createElement("div", {id: "parent"}, [father1, father2])


const root = ReactDOM.createRoot(document.getElementById("root"))
console.log(root)

root.render(parent1)