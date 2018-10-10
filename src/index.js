import React from "react";
import ReactDOM from "react-dom";
// just a comment
const Button = (props) =>{
  return <button>{props.label}</button>;
};

ReactDOM.render(<Button label="click me" />, root);
