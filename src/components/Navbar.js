import React from "react";
import { Link } from "react-router-dom";

const Navbar = () => (
  <div className="navbar">
    <h3>Math Magicians</h3>
    <Link to="/home">Home</Link>
    <Link to="/calculator">Calculator</Link>
    <Link to="/quote">Quote</Link>
  </div>
);

export default Navbar;
