/* eslint-disable react/prop-types */
import React from 'react';

const Button = ({ name, handleClick }) => ({
  name, handleClick, wide, color,
}) {
  return (
    <>
      <button
        type="button"
        name={name}
        onClick={handleClick}
        style={{
          background: color || '#f5913e',
          width: wide ? '50%' : '25%',
        }}
      >
        {name}
      </button>
    </>
  );
}

export default Button;
