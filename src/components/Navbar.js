import React from "react";
import { Link } from "react-router-dom";

const Navbar = () => (
  <div className="navbar">
    <h3>Math Magicians</h3>
    <div class="navbar-links">
      <Link to="/home" class="navbar-link">
        Home
      </Link>
      <Link to="/calculator" class="navbar-link">
        Calculator
      </Link>
      <Link to="/quote" class="navbar-link">
        Quote
      </Link>
    </div>
  </div>
);

export default Navbar;
