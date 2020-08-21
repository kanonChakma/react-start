import React from "react";
import "./styles.css";

export default function App() {
  const name = ["tipon", "rubel", "kanon", "riton"];
  const allProduct = [
    { name: "Photography", price: "US$9.99/mo", info: "Lightroom." },
    { name: "all Apps", price: "US$52.99/mo", info: "InDesign, and Acrobat." }
  ];
  return (
    <div className="App">
      <Product product={allProduct[0]}></Product>
      <Product product={allProduct[1]}></Product>
      {/* <h1>Welcome to the new react world {3 + 5}</h1>
      <h2 style={style}>what are you doing man</h2>
      <h4>person info is {person.name}</h4> */}
      <Personinfo name="bubon" village="dajarpara"></Personinfo>
      <Personinfo name="tipon" village="dajarpara1"></Personinfo>
      <Personinfo name={name[3]}></Personinfo>
    </div>
  );
}
function Product(props) {
  const productStyle = {
    width: "300px",
    height: "200px",
    borderRadious: "10px",
    backgroundColor: "lightgray",
    margin: "5px"
  };
  return (
    <div style={productStyle}>
      <h1>{props.product.name}</h1>
      <h3>{props.product.price}</h3>
      <p>{props.product.info}</p>
      <button>Buy Now</button>
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
