/* eslint-disable react/prop-types */
import React from "react";

function Display({ calculation }) {
  return (
    <>
      <input id="result" value={calculation || "0"} />
    </>
  );
}

export default Display;
