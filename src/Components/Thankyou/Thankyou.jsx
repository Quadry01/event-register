import React from "react";
import mark from "../../images/mark.svg";
import "./Thankyou.css";
import { Link } from "react-router-dom";

const Thankyou = () => {
  return (
    <div className="card-container">
      <div className="card">
        <img className="check-icon" src={mark} alt="check" />
        <h1>Thank You!</h1>
        <p>Thanks for being awasome, we hope you enyour the event</p>
        <Link to="/">
          <button className="thanks-btn">Back to login</button>
        </Link>
      </div>
    </div>
  );
};

export default Thankyou;
