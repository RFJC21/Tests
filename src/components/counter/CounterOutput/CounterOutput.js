import React from "react";
import classes from "./CounterOutput.css";

const counterOutput = props => (
  <div>
    <header className={classes.Count_Output}>
      Current Count: <strong>{props.count}</strong>
    </header>
  </div>
);

export default counterOutput;
