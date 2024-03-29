import React from "react";
import { Link } from "react-router-dom";
import "./Eventpage.css";
import { useContext } from "react";
import { myContext } from "../../Context";
import { auth } from "../../FirebaseConfig/Firebase";
import { signOut } from "firebase/auth";

const Eventpage = () => {
  const { Events1, partyName, setPartyName } = useContext(myContext);

  const Signout = () => {
    try {
      signOut(auth);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className="main">
      <h1 className="eventpage-header">Available Events</h1>
      <Link onClick={Signout} to={"/"}>
        <button className="event-btn">Log Out</button>
      </Link>
      <div className="card-container">
        {Events1.map((item, index) => (
          <div className="event-container" key={index}>
            <div className="event-card">
              <section className="event-img-div">
                <img className="event-img" src={item.image} alt="ev" />
              </section>
              <section className="event-details">
                <div>Event: {item.name}</div>
                <div>Location: {item.venue}</div>
                <div>Ticket: ${item.price}</div>
                <Link to="/Form">
                  <button
                    onClick={() => {
                      setPartyName(item.name);
                    }}
                    className="register-btn"
                  >
                    Register
                  </button>
                </Link>
              </section>
            </div>{" "}
          </div>
        ))}
      </div>
    </div>
  );
};

export default Eventpage;
