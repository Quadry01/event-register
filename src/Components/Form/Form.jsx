import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./Form.css";
import { useContext } from "react";
import { myContext } from "../../Context";
const Form = () => {
  var tim = new Date();
  var registered_time = JSON.stringify(tim);
  var reg_date = registered_time.slice(1, 11);
  var reg_time = registered_time.slice(12, 18);

  const { logRegister, partyName } = useContext(myContext);
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [address, setAddress] = useState("");
  const [city, setCity] = useState("");
  const [phone, setPhone] = useState("");
  var newCustomer = {
    event: partyName,
    first_name: firstName + " " + lastName,
    phone_number: phone,
    email_address: email,
    address: address,
    city: city,
    time: reg_date + " " + reg_time,
  };

  function FormSubmitHandler(e) {
    logRegister.push(newCustomer);
    localStorage.setItem("logRegister", JSON.stringify(logRegister));
    // e.preventDefault();
  }
  return (
    <div className="form-container">
      <form className="form-div">
        <h6 className="form-header">
          Online Event Registration for <br />
          {partyName}
        </h6>
        <label className="label-first-name">First Name</label>
        <input
          required
          value={firstName}
          onChange={(e) => setFirstName(e.target.value)}
          type="text"
          placeholder="First Name"
        />
        <label className="label-last-name">Last Name</label>
        <input
          required
          value={lastName}
          onChange={(e) => setLastName(e.target.value)}
          type="text"
          placeholder="Last Name"
        />
        <label className="label-zip-code">Phone Number</label>
        <input
          required
          value={phone}
          onChange={(e) => setPhone(e.target.value)}
          type="text"
          placeholder="Phone Number"
        />
        <label className="email">Email</label>
        <input
          required
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          type="email"
          placeholder="Email Address"
        />
        <label className="label-address">Adress</label>
        <input
          required
          value={address}
          onChange={(e) => setAddress(e.target.value)}
          type="text"
          placeholder="Home Address"
        />
        <label className="label-city">City</label>
        <input
          required
          value={city}
          onChange={(e) => setCity(e.target.value)}
          type="text"
          placeholder="City"
        />

        <Link onClick={FormSubmitHandler} to={"/Thankyou"}>
          <button className="submit-btn">Submit</button>
        </Link>
      </form>
    </div>
  );
};

export default Form;
