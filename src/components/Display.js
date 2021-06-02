import React from "react";

function Display({ calculation }) {
  return (
    <React.Fragment>
      <input id="result" value={calculation || "0"}></input>
    </React.Fragment>
  );
}

export default Display;
