import React from "react";
import mark from "../../images/mark.svg";
import "./Thankyou.css";
import { Link } from "react-router-dom";
import { signOut } from "firebase/auth";
import { auth } from "../../FirebaseConfig/Firebase";

const Thankyou = (e) => {
  let newperson = localStorage.getItem("customer");
  console.log(JSON.parse(newperson).first_name);
  const Signout = () => {
    try {
      signOut(auth);
    } catch (error) {
      console.log(error);
    }
    e.preventDefault();
  };
  return (
    <div className="card-container">
      <div className="card">
        <img className="check-icon" src={mark} alt="check" />
        <h1>Thank You {JSON.parse(newperson).first_name}!</h1>
        <p>
          You have successfully registered for the {JSON.parse(newperson).event}
          , your ticket has been sent to {JSON.parse(newperson).email_address}.
          We look forward to having you.
        </p>
        <Link onClick={Signout} to={"/"}>
          <button className="thanks-btn">Back to login</button>
        </Link>
        <Link
          onClick={() => {
            localStorage.removeItem("customer");
          }}
          to={"/Eventpage"}
        >
          <button className="explore-btn">Explore other Events</button>
        </Link>
      </div>
    </div>
  );
};

export default Thankyou;
