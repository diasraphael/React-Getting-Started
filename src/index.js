import React from "react";
import ReactDOM from "react-dom";

const Button = (props) =>{
  return <button>{props.label}</button>;
};

ReactDOM.render(<Button label="click me" />, root);
