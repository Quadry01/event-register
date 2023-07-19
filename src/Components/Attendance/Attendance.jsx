import React from "react";
import "./Attendance.css";

const Attendance = () => {
  var log = JSON.parse(localStorage.getItem("logRegister"));

  return (
    <div className="log-container">
      {log.map((item, index) => (
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
