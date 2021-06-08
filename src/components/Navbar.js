import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => (
  <div className="navbar">
    <h3>Math Magicians</h3>
    <div className="navbar-links">
      <Link to="/" className="navbar-link">
        Home
      </Link>
      <Link to="/calculator" className="navbar-link">
        Calculator
      </Link>
      <Link to="/quote" className="navbar-link">
        Quote
      </Link>
    </div>
  </div>
);

export default Navbar;
