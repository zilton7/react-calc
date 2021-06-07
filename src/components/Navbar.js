import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => (
  <div className="navbar">
    <h3>Math Magicians</h3>
    <Link to="home" class="navbar-links">
      Home
    </Link>
    <Link to="calculator" class="navbar-links">
      Calculator
    </Link>
    <Link to="quote" class="navbar-links">
      Quote
    </Link>
  </div>
);

export default Navbar;
