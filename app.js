import React from "react";
import ReactDOM from "react-dom";

const mainHeading = React.createElement(
  "h1",
  { id: "heading", class: "header-one" },
  "Hello World from React!"
);

const root = ReactDOM.createRoot(document.querySelector("#root"));
// root.render(mainHeading);

// eg : Creating nested html structure
//
// <div class="parent">
//   <div class="child">
//     <h1>This is h1 tag</h1>
//   </div>
// </div>;
//

// const container = React.createElement(
//   "div",
//   { id: "parent" },
//   React.createElement(
//     "div",
//     { id: "sub-parent" },
//     React.createElement("h1", { id: "header-one" }, "This is a h1 Tag!.")
//   )
// );

// root.render(container);

// eg creating siblings using arrays

const container = React.createElement(
  "div",
  { id: "parent" },
  React.createElement("div", { id: "sub-parent" }, [
    React.createElement(
      "h1",
      { id: "heading-one" },
      "This is a Namaste React 2.0"
    ),
    React.createElement("h2", { id: "heading-two" }, "This is a h2 tag"),
  ])
);

root.render(container);
