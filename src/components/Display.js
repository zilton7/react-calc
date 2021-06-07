/* eslint-disable react/prop-types */
import React from 'react';

const Display = ({ calculation }) => (
  <div className="display">
    <input id="result" value={calculation || '0'} />
  </div>
);

export default Display;
