import React from "react";
import classes from "./Button.css";

//{props.children} to be able to use the button conditionaly
//and wrap the content inside the tags
const button = props => (
  <div>
    <button className={classes.Button} onClick={props.clicked}>
      {props.children}
    </button>
  </div>
);

export default button;
