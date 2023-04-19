import React from "react";
import { Link } from "react-router-dom";
import "./Eventpage.css";
import { useContext } from "react";
import { myContext } from "../../Context";

const Eventpage = () => {
  const { Events } = useContext(myContext);
  const { partyName, setPartyName } = useContext(myContext);
  console.log(partyName);

  return (
    <>
      <h1 className="eventpage-header">Available Events</h1>
      {Events.map((item, index) => (
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
          {/* <Link to="/Form">
            <button className="submit-btn">Submit</button>
          </Link> */}
        </div>
      ))}
    </>
  );
};

export default Eventpage;
