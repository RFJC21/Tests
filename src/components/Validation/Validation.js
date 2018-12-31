import React from "react";

const validation = props => {
  let message = "Text length <5";

  if (props.inputLength >= 5) {
    message = "Text length >=5";
  }

  return (
    <div>
      <p>Length: {props.inputLength}</p>
      <p>{message}</p>
    </div>
  );
};
export default validation;
