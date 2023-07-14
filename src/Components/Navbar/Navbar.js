import React from "react";
import "./Navebar.css";
import { AiFillSketchCircle } from "react-icons/ai";

const Navbar = () => {
  return (
    <div className="nav-container">
      <AiFillSketchCircle className="logo" />

      <ul className="nav-ul">
        <li>Home</li>
        <li>Sign up</li>
        <li>Contact us</li>
        <li>Reister event</li>
      </ul>
    </div>
  );
};

export default Navbar;
