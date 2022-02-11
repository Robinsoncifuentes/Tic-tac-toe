//import react into the bundle
import React from "react";
import ReactDOM from "react-dom";

// include your styles into the webpack bundle
import "../styles/index.css";
import "@popperjs/core";
//import your own components
import Layout from "./view/Layouts";

//render your react application
ReactDOM.render(<Layout />, document.querySelector("#root"));
