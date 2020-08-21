import React from "react";
import "./styles.css";

export default function App() {
  return (
    <div className="App">
      {/* <h1>Welcome to the new react world {3 + 5}</h1>
      <h2 style={style}>what are you doing man</h2>
      <h4>person info is {person.name}</h4> */}
      <Personinfo name="bubon" village="dajarpara"></Personinfo>
      <Personinfo name="tipon" village="dajarpara1"></Personinfo>
      <Personinfo name="siston" village="dajarpara2"></Personinfo>
    </div>
  );
}
function Personinfo(props) {
  const personStyle = {
    border: "1px solid red",
    //  marginBottom:'10px'
    margin: "10px"
  };
  return (
    <div
      /*style={personStyle}*/ style={{
        border: "1px solid red",
        margin: "10px"
      }}
    >
      <h1>Name is:{props.name}</h1>
      <h3>village Name is:{props.village}</h3>
    </div>
  );
}
