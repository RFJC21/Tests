import React from "react";
import classes from "./UserInput.css";

const userInput = props => (
  <div>
    <label className={classes.Label}>Enter some text:</label>
    <input
      className={classes.Input}
      type="text"
      onChange={props.changeName}
      value={props.currentName}
    />
  </div>
);

export default userInput;
