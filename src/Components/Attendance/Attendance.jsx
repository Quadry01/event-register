import React from "react";
import { useContext } from "react";
import { myContext } from "../../Context";
// import user_data from "../Form/Form";
import "./Attendance.css";

const Attendance = () => {
  const { logRegister } = useContext(myContext);

  return (
    <div className="log-container">
      {logRegister.map((item, index) => (
        <div className="log-card" key={index}>
          <div>Event: {item.event}</div>
          <div>
            Name: {item.first_name} {item.last_name}
          </div>
          <div>Contact: {item.phone_number}</div>{" "}
          <div>Email: {item.email_address}</div>
          <div>Adress: {item.address}</div>
          <div>City: {item.city}</div>
          <div>Date Registered: {item.time}</div>
        </div>
      ))}
    </div>
  );
};

export default Attendance;
