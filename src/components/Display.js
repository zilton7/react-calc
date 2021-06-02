/* eslint-disable react/prop-types */
import React from 'react';

function Display({ calculate }) {
  return (
    <>
      <input id="result" value={calculate || '0'} />
    </>
  );
}

export default Display;
