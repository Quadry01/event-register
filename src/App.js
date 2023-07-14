import { Routes, Route } from "react-router-dom";
import "./App.css";
import Login from "./Components/Login/Login";
import Form from "./Components/Form/Form";
import Thankyou from "./Components/Thankyou/Thankyou";
import Attendance from "./Components/Attendance/Attendance";
import { useState } from "react";
import { myContext } from "./Context";
import Eventpage from "./Components/Eventpage/Eventpage";
import ev1 from "./images/event1.jpg";
import ev2 from "./images/event2.jpg";
import ev3 from "./images/event3.jpg";
import ev4 from "./images/event4.jpg";
import ev5 from "./images/event5.jpg";
import ev6 from "./images/event6.jpg";

function App() {
  const [logRegister, setLogRegister] = useState([
    {
      event: "Graduation Party",
      first_name: "Azeez",
      last_name: "Quadry",
      phone_number: "+234333333",
      email_address: "quaryazeez.com",
      address: "Lagos",
      city: "Yaba",
      time: " 2023-03-20 6:12",
    },
    {
      event: "Coronation Party",
      first_name: "Aina",
      last_name: "John",
      phone_number: "+234555556",
      email_address: "Ainaj@cm.com",
      address: "Abuja",
      city: "eagle square",
      time: "2023-01-19 5:30",
    },
    {
      event: "Bachelor party",
      first_name: "Oyin",
      last_name: "Alao",
      phone_number: "+234666664",
      email_address: "oyinA@it.com",
      address: "Lagos",
      city: "Obalende",
      time: "2023-04-19 5:59",
    },
  ]);
  const [Events, setEvents] = useState([
    { image: ev1, name: "Beach Party", venue: "lagos Island", price: 2000 },
    { image: ev2, name: "Wedding Party", venue: "Ikeja", price: 5000 },
    { image: ev3, name: "Party", venue: "Ibadan", price: 2000 },
    { image: ev4, name: "Bachelor Party", venue: "Iwaya", price: 2000 },
    { image: ev5, name: "Singles Party", venue: "Akoka", price: 2000 },
    { image: ev6, name: "Married Party", venue: "Yaba", price: 2000 },
    {
      image: ev1,
      name: "Graduation Party",
      venue: "lagos Island",
      price: 2000,
    },
    { image: ev2, name: "Wedding Party", venue: "Ikeja", price: 5000 },
    { image: ev3, name: " Coronation Party", venue: "Ibadan", price: 2000 },
    { image: ev4, name: "Bachelor Party", venue: "Iwaya", price: 2000 },
    { image: ev5, name: "Singles Party", venue: "Akoka", price: 2000 },
    { image: ev6, name: "Married Party", venue: "Yaba", price: 2000 },
    { image: ev1, name: "Beach Party", venue: "lagos Island", price: 2000 },
    { image: ev2, name: "Wedding Party", venue: "Ikeja", price: 5000 },
    { image: ev3, name: "Party", venue: "Ibadan", price: 2000 },
    { image: ev4, name: "Bachelor Party", venue: "Iwaya", price: 2000 },
    { image: ev5, name: "Singles Party", venue: "Akoka", price: 2000 },
    { image: ev6, name: "Married Party", venue: "Yaba", price: 2000 },
  ]);
  const [partyName, setPartyName] = useState("");

  return (
    <div className="App">
      <>
        <myContext.Provider
          value={{
            logRegister,
            Events,
            partyName,
            setPartyName,
          }}
        >
          <Routes>
            <Route path="/" element={<Login />} />
            <Route path="/Form" element={<Form />} />
            <Route path="/Thankyou" element={<Thankyou />} />
            <Route path="/Attendance" element={<Attendance />} />
            <Route path="/Eventpage" element={<Eventpage />} />
          </Routes>
        </myContext.Provider>
      </>
    </div>
  );
}

export default App;
