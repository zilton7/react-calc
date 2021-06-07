/* eslint-disable react/prop-types */
import React from "react";

const Display = ({ calculation }) => (
  <div className="display">
    <input id="result" defaultValue={calculation || "0"} />
  </div>
);

export default Display;
