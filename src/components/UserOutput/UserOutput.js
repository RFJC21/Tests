import React from "react";
import classes from "./UserOutput.css";

const userOutput = props => (
  <div className={classes.Output}>
    <p>
      <strong>Entered Text: {props.username}</strong>
    </p>
  </div>
);

export default userOutput;
