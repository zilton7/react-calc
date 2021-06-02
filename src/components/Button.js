/* eslint-disable react/prop-types */
import React from 'react';

function Button({ name }) {
  return (
    <>
      <button type="button">{name}</button>
    </>
  );
}

export default Button;
