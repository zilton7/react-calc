import React from 'react';

const Navbar = () => (
  <div className="navbar">
    <h3>Math Magicians</h3>
    <div className="navbar-links">
      <a href="/" className="navbar-link">
        Home
      </a>
      <a href="/calculator" className="navbar-link">
        Calculator
      </a>
      <a href="/quote" className="navbar-link">
        Quote
      </a>
    </div>
  </div>
);

export default Navbar;
