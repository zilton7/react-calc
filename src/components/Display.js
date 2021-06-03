/* eslint-disable react/prop-types */
import React from "react";
import PropTypes from "prop-types";

function Display({ calculation }) {
  return (
    <>
      <input id="result" value={calculation || "0"} />
    </>
  );
}

Display.defaultProps = {
  result: null,
};

export default Display;
