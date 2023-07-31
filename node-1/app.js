// creating an element to render inside the root element.

import React from "react";
import  ReactDOM  from "react-dom/client";
const title = React.createElement("div",{id:"container",},[
    React.createElement("h1",{className:"title"},"Hey React"),
    React.createElement("h4",{className:"small Heading"},"This is from Basic HTML")]
);

//creating the root element to render inside the screen.
const root = ReactDOM.createRoot(document.getElementById("root"));

//Rendering the root.
root.render(title);

