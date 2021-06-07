/* eslint-disable react/prop-types */
import React from 'react';

const Button = ({ name, handleClick }) => (
  <>
    <button type="button" onClick={handleClick}>
      {name}
    </button>
  </>
);

export default Button;
