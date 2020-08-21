import React from "react";
import "./styles.css";

export default function App() {
  //For friends
  const friendInfo = [
    { name: "bubon", age: 24 },
    { name: "tiopn", age: 23 },
    { name: "siston", age: 25 },
    { name: "titon", age: 26 },
    { name: "kiron", age: 22 }
  ];
  //For product
  const allProduct = [
    { name: "Photography", price: "US$9.99/mo", info: "Lightroom." },
    { name: "all Apps", price: "US$52.99/mo", info: "InDesign, and Acrobat." }
  ];
  //For Person
  const name = ["tipon", "rubel", "kanon", "riton"];
  /*----------------------
  const friendName=friendInfo.map(property=>property.name);
  console.log(friendName);
  const productName = allProduct.map((product) => product.name);
  console.log(productName);
  const arrayName=name.map(name=>name);
  console.log(arrayName);
  -----------------------*/
  return (
    <div className="App">
      {/* <ul>
         {
           name.map(name=><li>{name}</li>)
         }
         {
          allProduct.map(product=><li>{product.name}</li>)
         }
       </ul>
        */}

      {/* <h1>Welcome to the new react world {3 + 5}</h1>
      <h2 style={style}>what are you doing man</h2>
      <h4>person info is {person.name}</h4> */}
      {friendInfo.map((info) => (
        <allfriend allinfo={info}></allfriend>
      ))}
      {allProduct.map((value) => (
        <Product product={value}></Product>
      ))}
      <Product product={allProduct[0]}></Product>
      <Product product={allProduct[1]}></Product>
      <Personinfo name="bubon" village="dajarpara"></Personinfo>
      <Personinfo name="tipon" village="dajarpara1"></Personinfo>
      <Personinfo name={name[3]}></Personinfo>
    </div>
  );
}
/*------------------------------------------------*/
//-----For friends------//
function allfriend(props) {
  console.log(props);
  const { name, age } = props.allinfo;
  console.log(name, age);
  return (
    <div>
      <h3>Name is:{name}</h3>
      <h3>Age is:{age}</h3>
    </div>
  );
}

/*------------------------------------------------*/
//-----For product------//
function Product(props) {
  const productStyle = {
    width: "300px",
    height: "200px",
    borderRadious: "10px",
    backgroundColor: "lightgray",
    margin: "5px"
  };
  const { name, price, info } = props.product;
  return (
    <div style={productStyle}>
      {/* <h1>{props.product.name}</h1>
      <h3>{props.product.price}</h3>
      <p>{props.product.info}</p> */}
      <h1>{name}</h1>
      <h2>{price}</h2>
      <button>Buy Now</button>
    </div>
  );
}
/*------------------------------------------------*/
//-----For personInfo------//
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
/*------------------------------------------------*/
