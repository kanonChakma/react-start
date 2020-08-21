import React from "react";
import "./styles.css";

export default function App() {
  let person = {
    name: "bro",
    age: 23
  };
  var style = {
    color: "red",
    backgroundColor: "pink"
  };
  return (
    <div className="App">
      <h1>Welcome to the new react world {3 + 5}</h1>
      <h2 style={style}>what are you doing man</h2>
      <h4>person info is {person.name}</h4>
    </div>
  );
}
