import React from "react";
import mark from "../../images/mark.svg";
import "./Thankyou.css";
import { Link } from "react-router-dom";
import { signOut } from "firebase/auth";
import { auth } from "../../FirebaseConfig/Firebase";

const Thankyou = () => {
  const Signout = () => {
    try {
      signOut(auth);
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <div className="card-container">
      <div className="card">
        <img className="check-icon" src={mark} alt="check" />
        <h1>Thank You!</h1>
        <p>Thanks for being awasome, we hope you enyour the event</p>
        <Link onClick={Signout} to={"/"}>
          <button className="thanks-btn">Back to login</button>
        </Link>
      </div>
    </div>
  );
};

export default Thankyou;
