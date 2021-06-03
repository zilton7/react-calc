/* eslint-disable react/prop-types */
import React from 'react';

function Display({ calculation }) {
  return (
    <div className="display">
      <input id="result" value={calculation || '0'} />
    </div>
  );
}

export default Display;
