import React from "react";
import ReactDOM from "react-dom/client";

const headder = React.createElement(
    "h1", {}, "Hello, world!");
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
    headder // React.createElement("h1", null, "Hello, world!")
);