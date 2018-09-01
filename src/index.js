import React from "react";
import ReactDOM from "react-dom";

const Button = function(props) {
  return <button>{props.label}</button>;
};

ReactDOM.render(<Button label="click me" />, root);
